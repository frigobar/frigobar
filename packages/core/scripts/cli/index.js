const { createComponent, createTest, createStory } = require('./creators');
const { getPaths, editIndex } = require('./utils');

const init = () => {
  const paths = getPaths();
  const name = process.argv.slice(2).join();

  createComponent(name, paths);
  createTest(name, paths);
  createStory(name, paths);
  editIndex(name, paths);
};

init();
