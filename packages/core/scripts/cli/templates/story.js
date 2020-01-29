const story = name => `import React from 'react';

import { ${name} } from '../src/components';

export default {
  title: '${name}',
  component: ${name},
};

export const Default = () => <${name}>${name}</${name}>;
`;

module.exports = story;
