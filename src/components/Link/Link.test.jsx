import React from 'react';
import { render } from '@testing-library/react';

import Link from './Link';

describe('<Link />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Link href="test.html">Simple Link </Link>);
      expect(container).toMatchSnapshot();
    });
  });
});
