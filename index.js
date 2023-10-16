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

/*
 * calculateMostRecentPosts returns the top 5 most recent blog entries
 * It assumes that posts are in the templates/blog/posts directory
 * and are named in YYYY-MM-DD format.
 **/
const calculateMostRecentPosts = async () => {
  posts = (await fs.promises.readdir("./templates/blog/posts"))
    .map((post) => post.slice(0, -4))
    .sort((a, b) => {
      const aDate = Date(Date.parse(`${a}T00:00:00.000Z`));
      const bDate = Date(Date.parse(`${b}T00:00:00.000Z`));
      return aDate < bDate ? -1 : aDate == bDate ? 0 : 1;
    });

  return posts.slice(-5);
};

const renderTemplates = async () => {
  const blogPosts = (await fs.promises.readdir("./templates/blog/posts")).map(
    (post) => [`blog/posts/${post.slice(0, -4)}`],
  );

  const templatesToCompile = [
    // Root
    ["index"],
    ["about"],
    [
      "blog",
      {
        posts: await calculateMostRecentPosts(),
      },
    ],
    // Blog pages
    ...blogPosts,
  ];

  templatesToCompile.forEach(([template, opts = {}]) => {
    pug.renderFile(`./templates/${template}.pug`, opts, (err, rendered) => {
      if (err) throw err;
      writeTemplate(template, rendered);
    });
  });
};

renderTemplates();
