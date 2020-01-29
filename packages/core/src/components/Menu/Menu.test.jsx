import React from 'react';
import { render } from '@testing-library/react';

import Menu from './';

describe('<Menu />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Menu />
    );
    expect(container).toMatchSnapshot();
  });
});
