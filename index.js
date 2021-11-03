const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
 
(async () => {
  // 00_HTML_CSS_Vorkurs
  await mdToPdf(
    { path: './00_HTML_CSS_Vorkurs/was-ist-html.md' },
    { dest: './00_HTML_CSS_Vorkurs/dist/was-ist-html.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './00_HTML_CSS_Vorkurs/was-ist-css.md' },
    { dest: './00_HTML_CSS_Vorkurs/dist/was-ist-css.pdf' }
  ).catch(console.error);

  // 01_HTML_CSS_Basics
  await mdToPdf(
    { path: './01_HTML_CSS_Basics/fortgeschrittene-basics-css.md' },
    { dest: './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-css.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './01_HTML_CSS_Basics/fortgeschrittene-basics-html.md' },
    { dest: './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-html.pdf' }
  ).catch(console.error);

  // 02_HTML_CSS_Tools
  await mdToPdf(
    { path: './02_HTML_CSS_Tools/responsive-design.md' },
    { dest: './02_HTML_CSS_Tools/dist/responsive-design.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './02_HTML_CSS_Tools/tooling.md' },
    { dest: './02_HTML_CSS_Tools/dist/tooling.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './02_HTML_CSS_Tools/frontend-frameworks.md' },
    { dest: './02_HTML_CSS_Tools/dist/frontend-frameworks.pdf' }
  ).catch(console.error);

  // 03_HTML_CSS_Tools
  await mdToPdf(
    { path: './03_HTML_CSS_Challenges/js-architecture.md' },
    { dest: './03_HTML_CSS_Challenges/dist/js-architecture.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './03_HTML_CSS_Challenges/images.md' },
    { dest: './03_HTML_CSS_Challenges/dist/images.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './03_HTML_CSS_Challenges/vuejs-miniintro.md' },
    { dest: './03_HTML_CSS_Challenges/dist/vuejs-miniintro.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './03_HTML_CSS_Challenges/vue-compound-components.md' },
    { dest: './03_HTML_CSS_Challenges/dist/vue-compound-components.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './03_HTML_CSS_Challenges/react-compound-components.md' },
    { dest: './03_HTML_CSS_Challenges/dist/react-compound-components.pdf' }
  ).catch(console.error);
})();
