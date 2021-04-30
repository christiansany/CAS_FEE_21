const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
 
(async () => {
  await mdToPdf({
    path: './00_HTML_CSS_Vorkurs/was-ist-html.md'
  }, {
    dest: './00_HTML_CSS_Vorkurs/dist/was-ist-html.pdf'
  }).catch(console.error);

  await mdToPdf({
    path: './00_HTML_CSS_Vorkurs/was-ist-css.md'
  }, {
    dest: './00_HTML_CSS_Vorkurs/dist/was-ist-css.pdf'
  }).catch(console.error);
})();
