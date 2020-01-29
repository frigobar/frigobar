const { test } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const createTest = (name, { components }) => {
  const componentPath = `${components}/${name}`;

  createFile(`${components}/${name}/${name}.test.jsx`, test(name));
};

module.exports = createTest;
