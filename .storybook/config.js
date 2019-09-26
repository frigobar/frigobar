import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: create({
      brandTitle: 'Frigobar',
      brandUrl: 'https://github.com/allyssonsantos/frigobar',
    }),
  },
});

configure(loadStories, module);
