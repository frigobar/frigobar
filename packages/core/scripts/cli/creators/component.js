const { index, component } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const createComponent = (name, { components }) => {
  const componentPath = `${components}/${name}`;
  createDirectory([componentPath]);

  createFile(`${components}/${name}/index.js`, index(name));
  createFile(`${components}/${name}/${name}.jsx`, component(name));
};

module.exports = createComponent;
