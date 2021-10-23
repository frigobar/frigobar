import React from 'react';
import { render } from '../../../testUtils';

import Input from './Input';

describe('<Input />', () => {
  describe('Snapshpts', () => {
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
    it('should match snapshot with all sizes', () => {
      const inputs = [
        <Input size="small" />,
        <Input size="medium" />,
        <Input size="large" />,
      ];

      inputs.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
