# HTML Basics

## Inhalt

* [Was ist HTML?](#was-ist-html)
* [Aufbau einer HTML-Datei](#aufbei-einer-html-datei)
* [Der Browser & Standards](#der-browser--standards)
* [IDs & Klassen](#ids--klassen)
* [Block- & Inline-Elemente](#block---inline-elemente)
* [Neue Elemente](#neue-elemente)

## Setup

Für Übungen nutzen wir die folgende **CodeSandbox** als Startpunkt:

**[https://codesandbox.io/s/rrcjw](https://codesandbox.io/s/rrcjw)**

Die Übungen bauen immer aufeinander auf. Aber keine Angst! Für den Fall, dass bei einer Übung etwas nicht klappen sollte, gibts bei jeder Übung einen Link zur CodeSandbox mit dem aktuellen Stand.

## Was ist HTML?

* «Hyper Text Markup Language»
* Auszeichnungssprache, keine Programmiersprache
* Zweck: Beschreiben von Inhalt
* Eigenheit: Presentation Semantics

### Eigenheiten einer HTML-Datei

* HTML benötigt keinen Server
* Dateien müssen mit `.html` enden
* Aufrufbar in jedem Webbrowser
* `index.html` ist der Root / die Startseite einer Website
  * http://www.something.com  
    &rightarrow; http://www.something.com/index.html  
    Die `index.html`-Datei wird automatisch angezeigt
  * http://www.something.com/about.html  
    &rightarrow; http://www.something.com/about.html  
    Hier verweisen wir explizit auf eine Seite
  * *Dieses Standardverhalten kann mit div. Servereinstellungen überschrieben werden.*

### Syntax

Offizielle Spezifikation: [https://www.w3.org/TR/2011/WD-html-markup-20110405/syntax.html](https://www.w3.org/TR/2011/WD-html-markup-20110405/syntax.html)

Elemente starten mit einem `<` gefolgt vom **Tagnamen**. Anschliessend kommen *optionale* **Attribute** und deren Values. Das Ende des Starttags ist mit einem `>` gekennzeichnet.  
Danach kommt der **Inhalt** des Elementes.  
Abschliessend kommt der Endtag, dieser startet wieder mit einem `<` gefolgt von einem `/` und dem **Tagnamen**, danach wird dieser geschlossen mit einem `>`

```html
<!-- Generelle Syntax -->
<tagname attribute="value">Inhalt</tagname>

<!-- Attribut ohne Wert -->
<tagname attribute>Inhalt</tagname>

<!-- Ohne Attribute -->
<tagname>Inhalt</tagname>
```

**Beispiele**

```html
<h1 id="my-id">Hallo Welt!</h1>
<p class="some-fany-class">Dies ist ein Paragraph</p>
```

#### Void Elemente

Es gibt auch sogenannte void elements. Diese haben keinen Inhalt und der Endtag ist daher implizit und muss nicht angegeben werden.

```html
<!-- Generelle Syntax -->
<tagname attribute="value">

<!-- Attribut ohne Wert -->
<tagname attribute>

<!-- Ohne Attribute -->
<tagname>

<!-- Mit zusätzlichem / -->
<tagname />
```

**Beispiele**

```html
<!-- Line Break <br> -->
<p>In diesem Satz gibt es<br>einen line break</p>

<!-- Image -->
<img src="./monkey.jpg" alt="Monkey">
```

Liste von void-elements: [https://html.spec.whatwg.org/#void-elements](https://html.spec.whatwg.org/#void-elements)

> **Das Wichtigste in Kürze**
>  
> * Elemente haben normalerweise einen Starttag, einen Inhalt und einen Endtag
> * Die Ausnahme sind sogenannte void-elements. Diese haben keinen Inhalt und daher auch keinen expliziten Endtag
> * Elemente können optional einen oder mehrere Attribute haben

## Aufbei einer HTML-Datei

HTML-Dateien haben einen gewissen Grundaufbau, damit der Browser genau weiss, was er machen muss.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1 class=“fancy-title”>Hello World</h1>
    <img src=“./monkey.jpg” alt=Monkey">
    <p>
      Lorem ipsum dolor sit amet, consetetur.
    </p>
  </body>
</html>
```

* Der **Doctype** sagt dem Browser, welchen HTML-Standard dieser benutzen soll, um das Dokument anzuzeigen.
* `<html>` ist das Root-Element des Dokuments
* Im `<head>` stehen **Metainformationen**. Diese werden **nicht angezeigt**, sondern sind nur Informationen für Browser und Roboter, die diese auslesen.
* Im `<body>` seht der Inhalt der Page. Elemente innerhalb des Bodys werden dem User angezeigt.

### Infos zum `<html>`

Die Sprache der Website sollte auf dem `<html>`-Element angegeben werden, damit Roboter und Screenreader wissen, in welcher Sprache die Page angezeigt wird.

**Beispiel**

```html
<!DOCTYPE html>
<html lang="en">
  ...
</html> 
```

**Hilfreiche Links**

* [Documentation auf MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

### Infos zum `<head>`

* Das `<titel>`-Element ist das Einzgie, welches required ist
* Der Head beinhaltet vor allem Metainformationen
* Darin befinden sich z.B. Verlinkungen von CSS-Dateien, JavaScript-Dateien oder auch Informationen für Roboter (Google, Facebook, Twitter usw.)

<details>
  <summary>Beispiel head von galaxus.ch</summary>

```html
<head>
  <meta charSet="utf-8" />
  <meta content="index, follow" name="robots" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="alternate" href="https://www.galaxus.ch/de/" hrefLang="de-CH" />
  <link rel="alternate" href="https://www.galaxus.ch/en/" hrefLang="en-CH" />
  <link rel="alternate" href="https://www.galaxus.ch/fr/" hrefLang="fr-CH" />
  <link rel="alternate" href="https://www.galaxus.ch/it/" hrefLang="it-CH" />
  <link rel="alternate" href="https://www.galaxus.de/" hrefLang="de-DE" />
  <link rel="alternate" href="https://www.galaxus.at/" hrefLang="de-AT" />
  <title>galaxus.ch – fast alles für fast jede*n</title>
  <meta name="description"
    content="Galaxus ist das grösste Online-Warenhaus der Schweiz und führt ein stetig wachsendes Sortiment für fast alle Bedürfnisse. Stets zu tiefen Preisen und gratis geliefert." />
  <link rel="canonical" href="https://www.galaxus.ch" />
  <link rel="preload" as="image"
    imagesrcset="/im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=240 240w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=320 320w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=480 480w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=640 640w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=720 720w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=800 800w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=1080 1080w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=1440 1440w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=1600 1600w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=1800 1800w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=2000 2000w, /im/Files/6/2/9/4/6/2/0/7/DSCF3426%20Kopie21.jpeg?impolicy=PictureComponent&amp;resizeWidth=2272 2272w"
    imagesizes="(min-width: 1600px) 1255px, (min-width: 1400px) 1000px, (min-width: 992px) 668px, 200px" />
  <link rel="preload" as="image" media="(max-width: 319px)"
    imagesrcset="/im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=281&amp;cropWidth=281&amp;cropHeight=281 1x, /im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=562&amp;cropWidth=562&amp;cropHeight=562 2x" />
  <link rel="preload" as="image" media="(min-width: 320px) and (max-width: 991px)"
    imagesrcset="/im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=281&amp;resizeHeight=281&amp;cropWidth=281&amp;cropHeight=281 1x, /im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=562&amp;resizeHeight=562&amp;cropWidth=562&amp;cropHeight=562 2x" />
  <link rel="preload" as="image" media="(min-width: 992px) and (max-width: 1399px)"
    imagesrcset="/im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=234&amp;resizeHeight=234&amp;cropWidth=234&amp;cropHeight=234 1x, /im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=468&amp;resizeHeight=468&amp;cropWidth=468&amp;cropHeight=468 2x" />
  <link rel="preload" as="image" media="(min-width: 1400px)"
    imagesrcset="/im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=268&amp;resizeHeight=268&amp;cropWidth=268&amp;cropHeight=268 1x, /im/Files/2/1/9/7/1/9/9/1/resize_img.php?impolicy=ProductTileImage&amp;resizeWidth=536&amp;resizeHeight=536&amp;cropWidth=536&amp;cropHeight=536 2x" />
  <meta name="next-head-count" content="17" />
  <meta content="_YBCM7WFf9exvdMJuXNs5rljqZAS8wrufeIWeVB3ohU" name="google-site-verification" />
  <meta content="Wn05moJ_2g0lCXC1d5EdzTnhPQZzO5iHwDlzUdMSlcQ" name="google-site-verification" />
  <meta content="3i9c4gDpujmw0rqUDEiJ8Jc7zldVmXBBdtJ689paHdc" name="google-site-verification" />
  <meta content="B1Qxkm2N2ZRYYPQzLJw1iBzjnaTh_uOYQGuQDjC8i9w" name="google-site-verification" />
  <meta content="981DFE52913CC5503987B1DB130906D4" name="msvalidate.01" />
  <meta content="64f73c3385437c96437a02185a04818c" name="p:domain_verify" />
  <link rel="apple-touch-icon" sizes="180x180" href="/static/images/galaxus/pwa/apple-touch-icon.png?v=2" />
  <link rel="icon" type="image/png" href="/static/images/galaxus/pwa/favicon-32x32.png?v=2" sizes="32x32" />
  <link rel="icon" type="image/png" href="/static/images/galaxus/pwa/android-chrome-192x192.png?v=2" sizes="192x192" />
  <link rel="icon" type="image/png" href="/static/images/galaxus/pwa/favicon-16x16.png?v=2" sizes="16x16" />
  <link href="/static/meta/manifest_galaxus.json?v=2" rel="manifest" />
  <link rel="mask-icon" href="/static/images/galaxus/pwa/safari-pinned-tab.svg?v=2" color="#333333" />
  <link href="/static/images/galaxus/favicon.ico?v=2" rel="shortcut icon" type="image/x-icon" />
  <meta name="msapplication-TileColor" content="#000000" />
  <meta name="theme-color" content="#ffffff" />
  <meta content="/static/meta/msconfig_galaxus.xml?v=2" name="msapplication-config" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="format-detection" content="telephone=no" />
  <link href="/static/meta/opensearch_galaxus_ch.xml" rel="search" title="DigitecGalaxus Search"
    type="application/opensearchdescription+xml" />
  <script>
    (function (w, l) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    })(window, 'dataLayer');
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('consent', 'default', {
      "ad_storage": "denied",
      "analytics_storage": "denied"
    });
    gtag("set", "ads_data_redaction", true);
  </script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Galaxus",
      "url": "https://www.galaxus.ch",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.galaxus.ch/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  </script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "galaxus",
      "url": "https://www.galaxus.ch",
      "logo": "https://www.galaxus.ch/static/images/galaxus/logo.svg"
    }
  </script>
  <link rel="preload" href="/_next/static/css/7ef0f697d7a49d40.css" as="style" />
  <link rel="stylesheet" href="/_next/static/css/7ef0f697d7a49d40.css" data-n-g="" /><noscript data-n-css=""></noscript>
  <script defer="" nomodule="" src="/_next/static/chunks/polyfills-5cd94c89d3acac5f.js"></script>
  <script src="/_next/static/chunks/webpack-e8438810582aef27.js" defer=""></script>
  <script src="/_next/static/chunks/framework-041cb411eb99c607.js" defer=""></script>
  <script src="/_next/static/chunks/main-41e28ff18ec4ab5f.js" defer=""></script>
  <script src="/_next/static/chunks/pages/_app-35c13d3fa2630adb.js" defer=""></script>
  <script src="/_next/static/chunks/8666-e63a432887661557.js" defer=""></script>
  <script src="/_next/static/chunks/3505-363475cc6aca33ca.js" defer=""></script>
  <script src="/_next/static/chunks/5384-554397317d3ac67a.js" defer=""></script>
  <script src="/_next/static/chunks/pages/index-b3ce84eeffdc48fc.js" defer=""></script>
  <script src="/_next/static/MPeESVRrpmWlMPRsCtdbI/_buildManifest.js" defer=""></script>
  <script src="/_next/static/MPeESVRrpmWlMPRsCtdbI/_ssgManifest.js" defer=""></script>
  <script src="/_next/static/MPeESVRrpmWlMPRsCtdbI/_middlewareManifest.js" defer=""></script>
  
  <!-- Hier würden noch über 4000 Zeilen an CSS kommen... -->
</head>
```
</details>

Folgendes sollte im `<head>`als **minimum** drin sein (abgesehen vom mandatory `<title>`):

```html
<head>
  <!-- Stellt sicher, dass das richtige Charset verwendet wird -->
  <meta charset="utf-8" />
</head>
```

**Hilfreiche Links**

* [Documentation auf MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
* [Practical Guide](https://htmlhead.dev/)

> **Das Wichtigste in Kürze**
>  
> * Ein HTML-Dokument beinhaltet einen Doctype, das `<html>`-Element und darin den `<head>` und den `<body>`
> * Im `<head>` ist das `<title>`-Element required, ansonsten stehen im Head vor allem Metainformationen
> * Im `<body>` ist der Inhalt der Page angegeben, welche der User sehen kann

### Practice 🔥

Öffne diese [**CodeSandbox**](https://codesandbox.io/s/rrcjw) als Startpunkt.

- [ ] Füge ein HTML-Grundgerüst ein
- [ ] Wir bilden ein kleine Todo App. Du kannst einen passenden `<title>` einfügen

Zeit: ~ 5 min

**Solution**: [https://codesandbox.io/s/eemf9](https://codesandbox.io/s/eemf9)

## Der Browser & Standards

> Standards... how boring 🥱

Der Browser rendert das ganze HTML, es ist best Friend und gleichzeitig der Endgegner aller Frontendler.  
Dabei gibt es nicht nur Edge und Chrome, sondern noch andere. Jeder Browserhersteller (Browservendor) hat natürlich seine eigenen Auffassungen, wie er was am besten umsetzen kann. Damit aber unsere Page gleich aussieht im Chrome, sowie im Safari, werden **Standards** benötigt.

Die aktuelle Browserlandschaft der meistbenutzten Browser sieht so aus:

**Desktop**

* Chrome
* Firefox
* Safari (Exklusiv für macOS)
* Edge
* IE11 (Exklusiv für Windows)
* Opera
* UC Browser

**Mobile**

* Android
  * Chrome
  * Samsung Internet
* iOS
  * Safari

> **Note:** Dies ist keine vollständige Liste, sondern beinhaltet nur die meist genutzten Browser

<details>
  <summary>Browserentwicklung der letzten 13 Jahre</summary>

**2009 - 2022**
![Browser Usage Statistics - 2009-2022](./assets/browser-stats-2009-2022.png)
Source: [https://gs.statcounter.com/browser-market-share#monthly-200901-202204](https://gs.statcounter.com/browser-market-share#monthly-200901-202204)
</details>

### HTML(5(.3)): Aktueller Standard

[W3C](https://www.w3.org/) als offizielle Organisation zur Standardisierung.

> **Quote**
>  
> Leading the web to its full potential

[WHATWG](https://whatwg.org/) ist eine Vereinigung von Browservendors wie Google, Apple, Mozilla und Opera mit einer eigenen Spezifikation.
Die W3C übernimmt die Spezifikation der WHATWG grösstenteils in die offizielle Spezifikation.

**Geschichte**

* Einführung der HTML5-Spezifikation als «W3C Recommendation» im Oktober 2014
* Version "HTML 5.1" seit Oktober 2017 im Status «W3C Recommendation»
  * Beispiel von Neuerungen: picture-Element und srcset-Attribute
* Version "HTML 5.2" seit Dezember 2017 im Status «W3C Recommendation»
  * Beispiel von Neuerungen: dialog-Element
* Aktuelle Weiterentwicklung im «HTML 5.3 Working Draft»
  * Snapshot des [Living Standards](https://html.spec.whatwg.org/multipage/) der WHATWG

**Hilfreiche Links**

* W3C:
  * 5: http://www.w3.org/TR/html5/
  * 5.1: http://www.w3.org/TR/html51/
  * 5.2: http://www.w3.org/TR/html52/
  * 5.3: http://www.w3.org/TR/html53/
  * https://github.com/w3c/html/ (obsolete)
* WHATWG
  * https://html.spec.whatwg.org/
  * https://github.com/whatwg/html

### Testing einer Website

Da Browser alle ein bisschen anders funktionieren, oder zum Teil gar sehr alt sind aber trotzdem noch benutzt werden (z.B. IE11), müssen unsere Kreationen auch ausgiebig getestet werden.

**Nativ**

Beim nativen testen, wird die zu testende Page auf 'echten' Geräten aufgerufen und manuell getestet.

**Virtualisiert** _(nicht empfohlen, veraltet)_

VM für verschiedene IE-Versionen: https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/

**Remote** _(nativ und virtualisiert)_

Externe Dienste, um deine Page auf verschiedensten Geräten zu testen

* [Browserstack (empfohlen)](https://www.browserstack.com/)
* [Sourcelabs](https://saucelabs.com/)

> **Note:** Bevor ihr ein Projekt startet, überlegt euch gut, welche Browser unterstützt werden sollten. Einen älteren Browser im Nachhinein zu unterstützen ist meist mit sehr grossem Aufwand verbunden.

## IDs & Klassen

IDs und Klassen können auf jedes HTML-Element gesetzt werden. Sie dienen zur Identifikation und dem Styling von Elementen.

### IDs

* Können auf jedes Element mit dem `id`-Attribut gesetzt werden, sind aber überall optional
* Werden zur Identifikation von Elementen benutzt (z.B. um ein bestimmtes Element im JavaScript anzusteuern, oder um es mit CSS zu stylen)
* Dürfen jeweils nur einmal in einen HTML-Dokument vorkommen

**Beispiel**

```html
<div id="container">
  <h1 id="page-title">Headline<h1>
  ...
</div>
```

### Klassen

* Können auf jedem Element mit dem `class`-Attribut gesetzt werden, sind aber überall optional
* Klassen werden fürs Styling bevorzugt
* Es können mehrere Klassen auf ein Element angewandt werden, diese sind mit einem Leerzeichen zu trennen

**Beispiel**

```html
<div class="container">
  <h1 class="headline-primary second-class">
    Headline
  <h1>
  ...
</div>
```

## Block- & Inline-Elemente

HTML-Elemente unterscheiden sich grundsätzlich in zwei Typen: in Block- und Inline-Elemente.

### Block-Element

* Block-Elemente nehmen immer die volle Breite des Elternelementes ein
* Aufeinanderfolgende Block-Elemente werden daher per default untereinander dargestellt

**Beispiel**

```html
<p style="border: 2px solid green">
  Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. 
  Aut earum dolor perferendis 
  ducimus vitae soluta. 
</p> 
<p style="border: 2px solid green">
  Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. 
  Aut earum dolor perferendis 
  ducimus vitae soluta.
</p>
```

**Demo** 🤯 

- [Block-Elemente](https://codesandbox.io/s/mywz6)

### Inline Element

* Inline-Elemente besetzen nur den Platz, der benötigt wird
* Aufeinanderfolgende Inline-Elemente werden daher nebeneinander dargestellt

```html
<p>
  <a href="#" style="border: 2px solid blue">
    Link A
  </a>
  <a href="#" style="border: 2px solid blue">
    Link B
  </a>
</p>
```

**Demo** 🤯 

- [Inline-Elemente](https://codesandbox.io/s/k63zy)

### Weitere Infos

* Das Verhalten von Elementen kann über die display Property mit CSS überschrieben werden (mehr dazu später)
* Eine Übersicht von Block- & Inline-Elementen unter https://www.w3schools.com/html/html_blocks.asp

### Practice 🔥

Öffne diese [**CodeSandbox**](https://codesandbox.io/s/eemf9) als Startpunkt.

- [ ] Erstelle als erstes eine zweite Seite `about.html`
- [ ] Füge auf der `index.html` einen Link ein auf `about.html`
- [ ] Füge nun auf der `about.html` einen Link ein, sodass man wieder zur Startseite kommt
- [ ] Füge bei beiden Seiten einen `<h1>` mit einem passenden Titel ein
- [ ] Schreibe auf der `about.html` einen kurzen Paragraphen über Dich selbst und füge ein Bild ein.  
  Du kannst dafür das vorhandene `avatar.jpg` nutzen oder selbst ein Bild per Drag & Drop hochladen und dieses einbinden
- [ ] Füge auf beiden Seiten einen Fussbereich ein, wo Du dein &copy; platzieren kannst
- [ ] Passe deine Navigation so an, dass auf jeder Seite alle Navigationslinks vorhanden sind. Zeige die Navigationspunkt als Liste `<ul>` an

  Hilfestellung und Spezifikation der benutzten Tags unter https://www.w3schools.com/html/html_blocks.asp

Zeit: ~ 20 min

**Solution:** [https://codesandbox.io/s/2spun](https://codesandbox.io/s/2spun)

### Infos zu den benutzten Elementen

<details>
  <summary>Headings und Paragraphen</summary>

* Headings und Paragraphen sind beides Blockelemente
* Es gibt sechs Headings, `<h1>` bis `<h6>`
* Headings beinhalten semantische Informationen, ein `<h2>` sollte daher zum Beispiel immer unterhalb eines `<h1>` stehen. Zudem sollte es keine Lücken haben, einen `<h3>` nach einem `<h1>` zu verwenden ist also nicht erlaubt.
* Paragraphen `<p>` werden vor allem für Fliesstext gebraucht
* Innerhalb von Paragraphen dürfen nur Inlineelemente benutzt werden
</details>

<details>
  <summary>Links</summary>

* Können ein relatives Ziel zur aktuellen HTML-Datei, oder eine absolute URL haben
* Die Zielurl wird im `href`-Attribut angegeben
* Der `target`-Attribut bietet die Möglichkeit das Linkziel in einem neuen Browsertab zu öffnen

**Beispiel**

```html
<!-- Relatives Ziel -->
<a href="./about.html">About us</a>

<!-- Absolute URL als Ziel -->
<a href="/contact.html">Contact</a>

<!-- Externes Ziel -->
<a href=https://www.ost.ch target="_blank" rel="noopener">OST</a>
```
</details>

<details>
  <summary>Bilder</summary>

* Bilder haben zwei Attribute welche benötigt werden `src` und `alt`
* Der `src`-Attribut beinhaltet den Pfad zur anzuzeigenden Bilddatei. Diese kann sowohl relativ (vom HTML-Dokument aus), oder mit einem absoluten Pfad referenziert werden (z.B. https://www.ost.ch/someimage.jpg)
* Der `alt`-Attribut wird dem User gezeigt, wenn das Bild nicht geladen werden kann. Dieser dient ebenfalls als Informationen für Suchmaschinen und Screenreader

**Beispiel**

```html
<!-- Bild relativ zur HTML-Datei -->
<img src="./dog.jpg" alt="Some alternative text">

<!-- Absoluter Pfad -->
<img src="/dog.jpg" alt="Some alternative text">

<!-- Externes Bild -->
<img src="http://images.pexels/cat.jpg" alt="Some alternative text">

<!-- Breite und Höhe kann gesetzt werden -->
<img src="./dog.jpg" width="200" height="100" alt="Some alternative text">
```
</details>

<details>
  <summary>Listen</summary>

* Es gibt ungeordnete Listen `<ul>` (am häufigsten verwendet) und geordnete Listen `<ol>`
* Die einzelnen Listeneinträge sind in beiden Fällen `<li>`
* `<li>` sind die einzigen Elemente, die direkt innerhalb von `<ul>` oder `<ol>` benutzt werden dürfen
* Navigationen sind fast immer mit `<ul>` erstellt, da diese von Suchmaschinen und Screenreaders gut erkannt werden.

**Beispiel**

```html
<ul>
  <li>Eintrag 1</li>
  <li>Eintrag 2</li>
  <li>Eintrag 3</li>
  <li>
    Eintrag 4
    <ul>
      <li>Eintrag 4.1</li>
      <li>Eintrag 4.2</li>
    </ul>
  </li>
</ul>

<ol>
  <li>Eintrag 1</li>
  <li>Eintrag 2</li>
  <li>Eintrag 3</li>
</ol>
```
</details>

<details>
  <summary>Divs</summary>

* Divs sind Block-Elemente welche *keine* semantischen Informationen beinhalten
* Werden vor allem für das Strukturieren von Inhalt benutzt

**Beispiel**

```html
<div>
  <div>
    <!-- Header -->
    <div>
      <!-- Navigation -->
    </div>
  </div>
  <div>
    <!-- Content -->
  </div>
  <div>
    <!-- Footer -->
  </div>
</div>
```
</details>

## Neue Elemente

HTML5 bietet viele neue Elemente, die den Browser vor allem mit semantischen Informationen füttern. Dies ist speziell gut für Suchmaschinen und um eine bessere Accessibility zu erzielen.

Zu den meistbenutzen Elementen gehören:

* `<header>`
* `<footer>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<aside>`

Beschreibungen der Elemente unter: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)

### Practice 🔥

Öffne diese [**CodeSandbox**](https://codesandbox.io/s/2spun) als Startpunkt.

- [ ] Strukturiere die Seite mit den neuen HTML5-Elementen
  - [ ] Nutze mindestens 4 der oben gelisteten Elemente
  - [ ] Strukturiere Deine Page so, wie es für Dich am meisten Sinn ergibt

  Tipp: Du kannst Dir auch den Quellcode einer beliebigen Page anschauen und dort die Struktur analysieren  
  Hilfestellung und Beschreibungen zu den Elementen unter: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning

Zeit: ~ 5 min

**Solution:** [https://codesandbox.io/s/f01xs](https://codesandbox.io/s/f01xs)
