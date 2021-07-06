import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';

import Menu from '.';

const Component = ({ openned }: { openned?: boolean }) => {
  const [open, setOpen] = useState(openned);
  const buttonRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={() => setOpen(!open)} ref={buttonRef} type="button">
          trigger
        </button>
        <Menu anchorElement={buttonRef} open={open}>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
        </Menu>
      </div>
      <div id="frigobar-menu"></div>
    </ThemeProvider>
  );
};

describe('<Menu />', () => {
  describe('snapshots', () => {
    it('should match', () => {
      const { container } = render(<Component openned />);
      expect(container).toMatchSnapshot();
    });
  });
});
