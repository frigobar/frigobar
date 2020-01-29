const fs = require('fs');

const editIndex = (name, paths) => {
  const indexPath = `${paths.components}/index.js`;

  const indexes = [
    {
      path: indexPath,
      content: fs.readFileSync(indexPath, 'utf-8'),
    },
  ];

  indexes
    .filter(index => index)
    .forEach(({ path, content }) => {
      const newContent = content
        .replace(/(import.*;\n$)/m, `$1import ${name} from './${name}';\n`)
        .replace(/};$/m, `,  ${name},\n };`);

      fs.writeFileSync(path, newContent, () => {});
    });
};

module.exports = editIndex;
