# Frontend Tooling

## Inhalt

* [Taskrunner & Bundler](#taskrunner--bundler)
* [Nützliche Tools/Loaders](#nützliche-pluginsloaders--packages)
* [SASS/SCSS Deepdive](sassscss-deepdive)

## Taskrunner & Bundler

**Taskrunners** und **Bundlers** sind hier, um dem Developer das Leben zu vereinfachen. **Sie sind grundsätzlich für das 'Aufbereiten' von Assets verantwortlich**. Wobei die Assets nicht ausschliesslich Bilder oder ähnliches sind, sondern auch CSS oder JavaScript.

Taskrunners haben dabei den Ansatz, dass sie mehr Stream-basiert funktionieren. In einem Task wird ein bestimmter Input (Dateien) gegeben, dieser wird dann in verschiedenen Prozessen verarbeitet und ergibt am Schluss wieder einen Output.

Bundler haben eher einen konfigurativen approach. Was passieren soll, wird nicht Schritt für Schritt angegeben, sondern man stellt eine kleine bis sehr grosse und komplizierte **Konfiguration** zusammen, die danach vorgibt, was der Bundler alles machen kann/soll. Am Anfang wurden Bundler 'nur' für das Zusammensetzen von Dateien genutzt. Dementsprechend wurden mehrere Dateien zu einer Datei zusammengeführt, daher der Name Bundler. Inzwischen sind Bundler sehr viel potenter geworden, sodass Taskrunner fast nicht mehr genutzt werden. Alles was früher der Taskrunner 'besser' konnte als ein Bundler (z.B. aufbereiten von Bilddateien, generieren von Icon-Sprites oder SVG-Sprite usw.), kann nun ebenfalls in einem Bundler gemacht werden. Daher werden wir heute nur die Bundler genauer anschauen am Beispiel von [Webpack](https://webpack.js.org/)

Taskrunner werden heute nicht mehr oft genutzt, daher werden wir diese heute leider nciht behandelt.

### Bundler (Webpack)

// TODO: Webpack 5 reinnehmen und praktisches Beispiel erfassen

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
[Source](https://webpack.js.org/concepts/)

#### Quickstart

**Installation**

Im Gegensatz zu Gulp muss hier nichts global installiert werden. Wir können `webpack` und `webpack-cli` lokal installieren.
Mit Webpack version 4.0 muss keine Konfigurationsdatei angegeben werden.

```sh
cd my/project/webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev
```

**Erstellung der Filestruktur**

```sh
/webpack-demo
|-- /dist
|   |-- index.html
|-- /src
|   |-- index.js
|-- package.json
```

```js
// src/index.js
function component() {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

document.body.appendChild(component());
```

```html
<!-- dist/index.html -->
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

**Ausführen des Tasks**

Beim Ausführen von Webpack ohne Konfigurationsdatei wird standardmässig `src/index.js` als Entry (Input) genommen.
Die Output-Datei wird anschliessend als `dist/main.js` gespeichert.

```sh
cd my/project/webpack-demo

npx webpack
```

Anschliessend kann das `dist/index.html` im Browser geöffnet werden. Wenn alles funktioniert hat, sollte ein 'Hello webpack' ersichtlich sein.

**Konfugirationsdatei**

Die Konfigurationsdatei für Webpack hat normalerweise `webpack.config.js` als Dateiname. Es kann aber auch irgend ein Dateiname verwendet werden (falls der Dateiname vom default abweicht, muss dies beim Ausführen von Webpack noch als Parameter angeben werden).

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // entry/input
  output: {
    filename: 'main.js', // output filename
    path: path.resolve(__dirname, 'dist'), // output directory
  },
};
```

**Webpack Loaders**

Gulp verwendet spezifische Gulp-Plugins, Webpack verwendet sogenannte Loaders.
Ein Loader definiert, was webpack mit einem gewissen Filetype machen soll.

**Beispiel `babel-loader`**

Installieren der genutzten Packages

```sh
npm install babel-loader @babel/core @babel/preset-env --save-dev
```

Konfigurieren vom Loader

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

> **Das Wichtigste in Kürze**
>  
> * Wenn ein gewisser Dateityp in Webpack unterstützt werden soll, muss der dazugehörige Loader installiert und konfiguriert werden.
> * Die Webpack-Konfiguration muss nicht selbst erstellt werden bei der Projektaufsetzung mit Angular CLI oder create-react-app.

**Weitere Bundler**

* [rollup.js](https://www.rollupjs.org/)
* [parcel](https://parceljs.org/)

**Hilfreiche Links**

* [Webpack Website](https://webpack.js.org/)
* [Getting starteg Guide](https://webpack.js.org/guides/getting-started/)
* [Webpack Loaders](https://webpack.js.org/concepts/loaders/)
* [Tutorial: How to set up React, webpack, and Babel from scratch](https://www.valentinog.com/blog/babel/)

TODO: Kleine Übung erstellen für Webpack 5

## Nützliche Plugins/Loaders & Packages

* [SASS/SCSS (CSS Präprozessoren) &rightarrow; CSS Asset Building](#sassscss-css-präprozessoren)
* [PostCSS (CSS Postprozessor) &rightarrow; Advanced CSS Asset Building](#postcss)
* [Babel &rightarrow; JavaScript Asset Building / Transpiling](#babel)
* [ESLint &rightarrow; QA (JavaScript Linter)](#eslint)

### SASS/SCSS (CSS Präprozessoren)

SASS/SCSS ist ein CSS Präprozessor. Er ermöglich eine vereinfachte Schreibweise von CSS und bietet viele nützliche Features an, welche das Schreiben von CSS vereinfachen und dieses wartbar machen. SCSS ist eine Abstrahierung von SASS, welche eine leicht andere Syntax hat. SASS und SCSS beiten aber die gleichen Funktionen und die meisten Developer nutzen die SCSS-Syntax.

**Beispiel**

```scss
/* SCSS */
$color-main: #73c92d;

a {
  color: $color-main;
}

.highlight {
  background-color: $color-main;
}
```

```scss
/* CSS */
a {
  color: #73c92d;
}

.highlight {
  background-color: #73c92d;
}
```

Website: https://sass-lang.com/  
Loader: https://webpack.js.org/loaders/sass-loader/

**Weitere CSS-Präprozessoren**

* [LESS](http://lesscss.org/)
* [Stylus](http://stylus-lang.com/)

### PostCSS

PostCSS ist ein Loader, der in Kombination mit zusätzlichen Plugins genutzt werden kann.  
Er wird sehr oft genutzt, da er anhand seiner Plugins sehr viele Transformationen unterstützt.

**Beispiel (Autoprefixr)**

```css
.box {
  border-radius: 1em;
}
```

Wird zu

```css
.box {
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  -ms-border-radius: 1em;
  border-radius: 1em;
}
```

Oft genutzte Plugins:
* [Autoprefixr &rightarrow; Legacy Browser support](https://github.com/postcss/autoprefixer)
* [Stylelint &rightarrow; QA (CSS Linter)](https://stylelint.io/)
* [PostCSS CSS Variables &rightarrow; Legacy Browser support](https://www.npmjs.com/package/postcss-css-variables)

Website: https://postcss.org/  
Loader: https://webpack.js.org/loaders/postcss-loader/

### Babel

Babel wird fürs Transpilieren und Transformieren von JavaScript genutzt.  
Es ermöglich die Nutzung der neusten ECMAScript Standards und "übersetzt" diese auf ältere Standards, damit unser JavaScript in älteren Browsern ebenfalls funktioniert.

Website: https://babeljs.io/  
Loader: https://webpack.js.org/loaders/eslint-loader/

### ESLint

ESLint kann fürs Linten und automatische Formatieren von JavaScript genutzt werden.  
Es ist der mit Abstand am häufigsten genutzte Linter für JavaScript.

Website: https://eslint.org/  
Loader: https://webpack.js.org/loaders/eslint-loader/

**Hilfreiche Links**

* [Liste von Loader](https://webpack.js.org/loaders/)

## SASS/SCSS Deepdive

SCSS ist ein *Superset* von CSS und wird zu CSS transpiliert. Ansatzweise kann es ein bisschen mit Typescript verglichen werden.  
Es ist nicht an die Limiterungen von CSS gebunden und ermöglicht das Schreiben von effizienterem und wartbarem CSS.

### Variablen

```scss
/* SCSS */
$color-main: #73c92d;

a {
  color: $color-main;
}

.highlight {
  background-color: $color-main;
}
```

```scss
/* CSS */
a {
  color: #73c92d;
}

.highlight {
  background-color: #73c92d;
}
```

### `@mixin`

```scss
/* SCSS */
@mixin visuallyhidden() {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.skiplink {
  @include visuallyhidden;
}

.hidden-title {
  @include visuallyhidden;
}
```

```scss
/* CSS */
.skiplink {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.hidden-title {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

#### Mit Parameter

```scss
/* SCSS */
@mixin triangle($direction: "down", $color: #000, $size: 1em, $selector: "after") {
  &::#{$selector} {
    height: 0;
    width: 0;
    content: "";
    position: absolute;
    border: $size solid transparent;

    @if $direction == "up" {
      border-bottom-color: $color;
    }

    @if $direction == "down" {
      border-top-color: $color;
    }
  }
}

.expand {
  @include triangle;
}

.collapse {
  @include triangle("up");
}
```

#### Mit Content Block

```scss
/* SCSS */
@mixin breakpoint($size) {
  @media (min-width: $size) {
    @content;
  }
}

.element {
  background: blue;

  @include breakpoint(1000px) {
    background: red;
  }
}
```

```scss
/* CSS */
@media(min-width: 1000px) {
  .element {
    background: red;
  }
}
```

### `@extend`

```scss
/* SCSS */
%box {
    padding: 1em;
    border: 1px solid #ccc;
}

.message {
  @extend %box;
  width: 100%;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
```

```scss
/* CSS */
.message,
.success,
.error {
  padding: 1em;
  border: 1px solid #cccccc;
  width: 100%;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}
```

#### Caveats

Position des zu extendenden Selektors ist relevant für ein generiertes Resultat.  
*Jedes vorkommen* wird extended:

```scss
/* SCSS */
.message + .message {
  margin-bottom: .5em;
}

.message-error {
  @extend .message;
}
```

```scss
/* CSS */
.message + .message,
.message-error + .message-error,
.message + .message-error,
.message-error + .message {
  margin-bottom: .5em;
}
```

**Einschub: `@mixin` vs `@extend`** 👀

Wichtig: generiertes CSS im Auge behalten
* `@mixin`:
  * Einfach wartbar, Resultat vorhersehbar
  * Resultat kann sehr redundant sein. Aber durch die gzip-Komprimierung ist dies nicht so schlimm.
* `@extend` (mit oder ohne %placeholder):
  * Reduktion des generierten Codes
  * Resultat nicht immer vorhersehbar, funktioniert nicht innerhalb von Media-Queries

### Strukturierung durch Verschachtelung

```scss
/* SCSS */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    display: block;
    text-decoration: none;
  }
}
```

```scss
/* CSS */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav a {
  display: block;
  text-decoration: none;
}
```

### Verschachtelung: "Parent-Selektor"

```scss
/* SCSS */
a {
  color: black;

  &:hover,
  &:focus {
    color: darkred;
  }
}

.headline {
  margin-top: 5em;

  .sidebar & {
    margin-top: 2em;
  }
}
```

```scss
/* CSS */
a {
  color: black;
}

a:hover,
a:focus {
  color: darkred;
}

.headline {
  margin-top: 5em;
}

.sidebar .headline {
  margin-top: 2em;
}
```

### Partials/Imports

Durch partials kann eine Modularisierung erzielt werden. Man kann seine SCSS-Dateien aufsplitten und beliebig importieren.  
Es ist z.B. üblich, dass man Mixins, Placeholder und Variablen in ein oder mehrere separate Partials schreibt.

```sh
/styles
|-- /modules
|   |-- _module1.scss
|   |-- _module2.scss
|   |-- _module3.scss
|-- /settings
|   |-- _variables.scss
|   |-- _functions.scss
|   |-- _mixins.scss
|-- main.scss
```

```scss
/* main.scss */
// Settings
@import "settings/variables";
@import "settings/functions";
@import "settings/mixins";

// Modules
@import "modules/module1";
@import "modules/module2";
@import "modules/module3";
```

### Operationen

```scss
/* SCSS */
.demo {
  width: 100% / 4;
  height: 20rem + 5rem;
  background: rgba(#f00, .5);
}
```

```scss
/* CSS */
.demo {
  width: 25%;
  height: 25rem;
  background: rgba(255,0,0,0.5);
}
```

### Funktionen

```scss
/* SCSS */
$baseFont: 16px;

@function pxToRem($px, $ref: $baseFont) {
  @return toRem(toPx($px) / toPx($ref));
}

@function toRem($val) {
  @return ($val + 0rem);
}

@function toPx($val) {
  @return ($val + 0px);
}

.example {
  width: pxToRem(480);
  height: pxToRem(60);
}
```

```scss
/* CSS */
.example {
  width: 30rem;
  height: 3.75rem;
}
```

### Loops

```scss
/* SCSS */

// List of all link icons
$icons: close, rss, document;

.link {
  border: 1px solid #444;

  // Generate class for each icon
  @each $icon in $icons {
    &.var_#{$icon} {
      /* ... */
      @if $icon == close {
        /* ... */
      }
    }
  }
}
```

```scss
/* CSS */
.link {
  border: 1px solid #444;
}

.link.var_close {
  /* ... */
}

.link.var_rss {
  /* ... */
}

.link.var_document {
  /* ... */
}
```

### Maps

```scss
/* SCSS */
$colors: (primary: red, secondary: blue);

button {
  color: map-get($colors, primary);

  &:hover,
  &:focus {
    color: map-get($colors, secondary);
  }
}
```

```scss
/* CSS */
button {
  color: red;
}

button:hover,
button:focus {
  color: blue;
}
```

### Interpolation

```scss
/* SCSS */
$class: foo;
$property: color;
$value: red;

.#{$class} {
  #{$property}: $value;
}
```

```scss
/* CSS */
.foo {
  color: red;
}
```

### Practice 🔥

Öffne diesen [**SASS/SCSS Playground**](https://www.sassmeister.com/) als Startpunkt.

- [ ] Schreibe einen SASS/SCSS Code, damit du das folgende CSS erhältst (achte darauf, dass das geschriebene SCSS möglichst wartbar sein sollte):

```css
.link.var_error {
  color: firebrick;
}
.link.var_success {
  color: olivedrab;
}
.link.var_info {
  color: lightblue;
}
.link.var_organic {
  color: tomato;
}

a {
  color: blue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a.important {
  color: red;
  font-weight: 700;
}
```

Zeit: ~ 10 min

<details>
  <summary>**Solution**</summary>

```scss
$link-variants: (
  error: firebrick,
  success: olivedrab,
  info: lightblue,
  organic: tomato
);

@each $name, $color in $link-variants {
  .link.var_#{$name} {
    color: $color;
  }
}

a {
  color: blue;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &.important {
    color: red;
    font-weight: 700;
  }
}
```
</details>

// TODO: Beispiele Machen für css modules oder styled components
// TODO: Eventuell beispiel von nativen css modules reinnehmen, falls noch Platz hat
