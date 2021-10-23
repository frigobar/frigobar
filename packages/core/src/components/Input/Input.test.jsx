import React from 'react';
import { render } from '../../../testUtils';

import Input from './Input';
import InputPassword from './InputPassword';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with all skins', () => {
      const inputs = [
        <Input skin="primary" />,
        <Input skin="primary" />,
        <Input skin="primary" />,
      ];

      inputs.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
    it('should match snapshot with input disabled', () => {
      const { container } = render(<Input disabled />);
      expect(container).toMatchSnapshot();
    });
  });
});

describe('<InputPassword />', () => {
  describe('Snapshots', () => {
    it('should match snapshot input password', () => {
      const { container } = render(
        <InputPassword skin="primary" type="password" />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
