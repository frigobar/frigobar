const { test } = require('../templates');
const { createFile } = require('../utils');

const createTest = (name, { components }) =>
  createFile(`${components}/${name}/${name}.test.jsx`, test(name));

module.exports = createTest;
