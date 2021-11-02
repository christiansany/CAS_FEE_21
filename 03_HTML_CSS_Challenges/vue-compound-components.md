# Compound Components with Vue

## Inhalt

* [Was sind Compound Components?](#was-sind-compound-components)
* [Das Problem](#das-problem)
* [Die Lösung](#die-lösung)
* [Beispiel: Accordion](#beispiel-accordion)

## Was sind Compound Components?

Compound Components können als ein Pattern angesehen werden, welches den **State** und das **Verhalten** einer Gruppe von Komponenten umschliesst, aber dennoch die Kontrolle des Rendering der einzelnen Teile dem Developer überlässt.

Das Ziel von Compound Components ist es, eine ausdrucksstärkere und flexiblere API für die Kommunikation zwischen der übergeordneten und der untergeordneten Komponenten bereitzustellen.

Ein gutes Beispiel ist das `<select>` in Kombination mit `<option>` in HTML:

```html
<select>
  <option value="value1">name1</option>
  <option value="value2">name2</option>
  <option value="value3">name3</option>
</select>
```

Die beiden Elemente kommunizieren im Hintergrund miteinander. Das `<select>` beinhaltet den State und die `<option>`s geben aber vor was alles ausgewählt werden kann. Dies ermöglicht ein expressives Markup und die Optionen müssen nicht über einen Attribut mitgeben werden.

```html
<!-- Mit einem Attribut 😱 -->
<select options="name1:value1;name2:value2;name3:value3"></select>
```

## Das Problem

Angenommen wir müssen ein Menu erstellen. Das Menu hat einen Button um es zu öffnen und zu schliessen. Es beinhaltet einerseits Links und andererseits Buttons. Beim Klick auf diese sollte die gewünschte Aktion getriggert werden und das Menu sollte wieder geschlossen werden.

Schauen wir verschiedene Implementationsarten an:

### Konfiguration

```ts
// Single File Component with Composition API
const menuConfig = {
  menuButton: {
    text: "Menu",
  },
  menuList: [
    {
      kind: "item",
      text: "Download",
      onClick: () => {
        /* ... */
      },
    },
    {
      kind: "link",
      text: "Details anzeigen",
      href: "details",
    },
  ],
  closeOnItemClick: true,
};
```

```html
<template>
  <Menu v-bind="menuConfig" />
</template>
```

In dem Beispiel erstellen wir ein kompliziertes Konfigurationsobjekt, welches alle Informationen bereits beinhaltet die für das Rendering und für die Funktionalität von allen Komponenten innerhalb des `<Menu>` gebraucht werden. Dies ist ein weit verbreitetes Pattern.

Der State ob das Menu offen ist oder geschlossen, wird von der `<Menu>`-Komponente selbst verwaltet, dazu haben wir die Möglichkeit, dass die Unterkomponenten den State vom `<Menu>` verändern können.

#### Pros

1. `<Menu>` regelt den internen State selbst, ob es in geöffneten oder geschlossenen Zustand ist

#### Cons

1. Die Verantwortung für das Rendering aller Unterkomponenten ist in direkter Verantwortung vom `<Menu>`-Komponenten, welches die verschiedenen Komponenten sehr stark miteinender koppelt
2. Die `props` werden durch mehrere Komponenten durchgereicht. Dies wird als "prop drilling" bezeichnet und gilt allgemein als "code smell"
3. Wenn die Daten in einem anderen Format daherkommen, müssen diese zuerst auf die Struktur der Config gemappt werden

### Stateverwaltung selber übernehmen

```ts
// Single File Component with Composition API
const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const download = () => {
  // Download stuff ...
  close();
};
```

```html
<Menu :open="isOpen">
  <MenuButton @click="open">Menu</MenuButton>
  <MenuList>
    <MenuItem @click="download">Download</MenuItem>
    <MenuLink :to="'details'" @lick="close">Details anzeigen</MenuLink>
  </MenuList>
</Menu>
```

In diesem Beispiel müssen wir zwar kein kompliziertes Konfigurationsobjekt erstellen. Da die Komponenten jedoch nicht miteinander verknüpft sind, müssen wir den State des Menu selbst verwalten.

#### Pros

1. Die Komponenten sind nicht mehr so eng gekoppelt und das `<Menu>` muss sich nicht mehr um das Rendering der Unterkomponenten kümmern
2. Die Datenstruktur spielt keine Rolle mehr

#### Cons

1. State muss selbst verwaltet werden, je nach Komponenten wird dies sehr kompliziert

## Die Lösung

Mit dem Compound Components Pattern können wir diese beiden Ansätze miteinander verbinden.  
Der State welchen wir nicht selbst verwalten wollen, ist in dem `<Menu>`-Komponenten verwaltet. Die verschiedenen Komponenten kommunizieren über Vue.js' [Provide / Inject](https://v3.vuejs.org/guide/composition-api-provide-inject.html#provide-inject) und somit sind die Implementationsdetails komplett abgekapselt. Wir können uns also voll und ganz um unsere Implementation kümmern.

```ts
// Single File Component with Composition API
const download = () => {
  // Download stuff ...
};
```

```html
<Menu closeOnItemClick>
  <MenuButton>Menu</MenuButton>
  <MenuList>
    <MenuItem @click="download">Download</MenuItem>
    <MenuLink :to="'details'">Details anzeigen</MenuLink>
  </MenuList>
</Menu>
```

Sieht doch viel besser aus, oder? 😍

#### Pros

1. State muss nicht selbst verwaltet werden, je nach Implementation kann aber trotzdem auf diesen zugegriffen werden (per [Scoped Slots](https://v3.vuejs.org/guide/component-slots.html#scoped-slots))
2. Die Datenstruktur spielt keine Rolle mehr
3. Die Komponenten sind nicht eng miteinander gekoppelt


## Beispiel: Accordion

Hier sind verschiedene Nutzungen von einem Accordion, welches als Compound Component erstellt wurde.

**Accordion mit statischen Daten**

Per [Scoped Slots](https://v3.vuejs.org/guide/component-slots.html#scoped-slots) können wir auch an Daten rankommen, welche vom Accordion verwaltet werden. Dies ist natürlich optional, und man muss nicht auf diese zugreiffen.

```html
<Accordion :multiple="true">
  <AccordionItem id="1">
    <template v-slot:default="{ id, isActive }">
      <AccordionToggle>
        Section {{ id }} {{ isActive ? "(active)" : null }}
      </AccordionToggle>
      <AccordionPanel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptatum.
        </p>
      </AccordionPanel>
    </template>
  </AccordionItem>
  <AccordionItem id="2">
    <AccordionToggle> Section 2 </AccordionToggle>
    <AccordionPanel>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        voluptatum.
      </p>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem id="3">
    <AccordionToggle> Section 3 </AccordionToggle>
    <AccordionPanel>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        voluptatum.
      </p>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```

**Accordion mit Daten aus einem Array**

```ts
// Die Daten können von überall bezogen werden und in jeglicher Struktur genutzt werden
const data = [{
  id: "1",
  title: "Section 1",
  description: "<p>Lorem ipsum 1</p>"
}, {
  id: "2",
  title: "Section 2",
  description: "<p>Lorem ipsum 2</p>"
}, {
  id: "3",
  title: "Section 3",
  description: "<p>Lorem ipsum 3</p>"
}];
```

```html
<Accordion :multiple="true">
  <AccordionItem v-for="entry in data" :id="entry.id">
    <AccordionToggle>{{ entry.title }}</AccordionToggle>
    <AccordionPanel v-html="entry.description"></AccordionPanel>
  </AccordionItem>
</Accordion>
```

**Demo** 🤯

- [Accordion Compound Component (Vue)](https://github.com/christiansany/vue-compound-components)
