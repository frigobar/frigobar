const { story } = require('../templates');
const { createFile } = require('../utils');

const createStory = (name, { story: storyPath }) => {
  createFile(`${storyPath}/${name.toLowerCase()}.stories.jsx`, story(name));
};

module.exports = createStory;
