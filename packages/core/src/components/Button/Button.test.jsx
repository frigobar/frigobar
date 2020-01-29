import React from 'react';
import { render } from '../../../testUtils';

import Button from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with all skins', () => {
      const buttons = [
        <Button>Button</Button>,
        <Button size="small">Button</Button>,
        <Button size="medium">Button</Button>,
        <Button size="large">Button</Button>,
        <Button size="small" icon="face">
          Button
        </Button>,
        <Button size="medium" icon="face">
          Button
        </Button>,
        <Button size="large" icon="face">
          Button
        </Button>,
        <Button full>Button</Button>,
        <Button skin="primary">Button</Button>,
        <Button skin="info">Button</Button>,
        <Button skin="success">Button</Button>,
        <Button skin="warning">Button</Button>,
        <Button skin="danger">Button</Button>,
        <Button disabled>Button</Button>,
      ];

      buttons.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
