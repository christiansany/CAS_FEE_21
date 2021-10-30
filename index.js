const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
 
(async () => {
  await mdToPdf(
    { path: './00_HTML_CSS_Vorkurs/was-ist-html.md' },
    { dest: './00_HTML_CSS_Vorkurs/dist/was-ist-html.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './00_HTML_CSS_Vorkurs/was-ist-css.md' },
    { dest: './00_HTML_CSS_Vorkurs/dist/was-ist-css.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './01_HTML_CSS_Basics/fortgeschrittene-basics-css.md' },
    { dest: './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-css.pdf' }
  ).catch(console.error);

  await mdToPdf(
    { path: './01_HTML_CSS_Basics/fortgeschrittene-basics-html.md' },
    { dest: './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-html.pdf' }
  ).catch(console.error);

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
})();
