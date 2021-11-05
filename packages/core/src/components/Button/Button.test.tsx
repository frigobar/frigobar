import React from 'react';
import { render } from '../../../testUtils';

import Button from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with all skins', () => {
      const buttons = [
        <Button key="button">Button</Button>,
        <Button size="small" key="small">
          Button
        </Button>,
        <Button size="medium" key="medium">
          Button
        </Button>,
        <Button size="large" key="large">
          Button
        </Button>,
        <Button full key="full">
          Button
        </Button>,
        <Button skin="primary" key="primary">
          Button
        </Button>,
        <Button skin="info" key="info">
          Button
        </Button>,
        <Button skin="success" key="success">
          Button
        </Button>,
        <Button skin="warning" key="warning">
          Button
        </Button>,
        <Button skin="danger" key="danger">
          Button
        </Button>,
        <Button disabled key="disabled">
          Button
        </Button>,
      ];

      buttons.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
