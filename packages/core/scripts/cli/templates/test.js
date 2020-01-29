const test = name => `import React from 'react';
import { render } from '@testing-library/react';

import ${name} from './';

describe('<${name} />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <${name} />
    );
    expect(container).toMatchSnapshot();
  });
});
`;

module.exports = test;
