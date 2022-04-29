const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

const mdToPdfProxy = async (from, to) => {
  if(!fs.existsSync(to)) {
    fs.writeFileSync(to, "")
  }

  await mdToPdf(
    { path: from },
    { dest: to }
  ).catch(console.error);
}
 
(async () => {
  // 00_HTML_CSS_Vorkurs
  await mdToPdfProxy('./00_HTML_CSS_Vorkurs/was-ist-html.md', './00_HTML_CSS_Vorkurs/dist/was-ist-html.pdf')
  await mdToPdfProxy('./00_HTML_CSS_Vorkurs/was-ist-css.md', './00_HTML_CSS_Vorkurs/dist/was-ist-css.pdf')

  // 01_HTML_CSS_Basics
  await mdToPdfProxy('./01_HTML_CSS_Basics/fortgeschrittene-basics-html.md', './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-html.pdf')
  await mdToPdfProxy('./01_HTML_CSS_Basics/fortgeschrittene-basics-css.md', './01_HTML_CSS_Basics/dist/fortgeschrittene-basics-css.pdf')

  // 02_HTML_CSS_Tools
  await mdToPdfProxy('./02_HTML_CSS_Tools/responsive-design.md', './02_HTML_CSS_Tools/dist/responsive-design.pdf')
  await mdToPdfProxy('./02_HTML_CSS_Tools/tooling.md', './02_HTML_CSS_Tools/dist/tooling.pdf')
  await mdToPdfProxy('./02_HTML_CSS_Tools/frontend-frameworks.md', './02_HTML_CSS_Tools/dist/frontend-frameworks.pdf')

  // 03_HTML_CSS_Challenges
  await mdToPdfProxy('./03_HTML_CSS_Challenges/js-architecture.md', './03_HTML_CSS_Challenges/dist/js-architecture.pdf')
  await mdToPdfProxy('./03_HTML_CSS_Challenges/images.md', './03_HTML_CSS_Challenges/dist/images.pdf')
  await mdToPdfProxy('./03_HTML_CSS_Challenges/vuejs-miniintro.md', './03_HTML_CSS_Challenges/dist/vuejs-miniintro.pdf')
  await mdToPdfProxy('./03_HTML_CSS_Challenges/vue-compound-components.md', './03_HTML_CSS_Challenges/dist/vue-compound-components.pdf')
  await mdToPdfProxy('./03_HTML_CSS_Challenges/react-compound-components.md', './03_HTML_CSS_Challenges/dist/react-compound-components.pdf')
})();
