import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with all skins', () => {
      const buttons = [
        <Button />,
        <Button skin="primary" />,
        <Button skin="info" />,
        <Button skin="success" />,
        <Button skin="warning" />,
        <Button skin="danger" />,
      ];

      buttons.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
