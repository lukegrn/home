const pug = require("pug");
const fs = require("fs");
const path = require("path");

const writeTemplate = async (template, rendered) => {
  const dirname = path.dirname(`public/${template}`);

  if (!fs.existsSync(dirname)) {
    await fs.promises.mkdir(dirname, { recursive: true });
  }

  await fs.promises.writeFile(`public/${template}.html`, rendered);
};

const renderTemplates = () => {
  const templatesToCompile = [["index", {}]];

  templatesToCompile.forEach(([template, opts]) => {
    pug.renderFile(`./templates/${template}.pug`, opts, (err, rendered) => {
      if (err) throw err;
      writeTemplate(template, rendered);
    });
  });
};

renderTemplates();
