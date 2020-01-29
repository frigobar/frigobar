import React from 'react';
import { render } from '../../../testUtils';

import Badge from './Badge';

describe('<Badge />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default badge', () => {
      const { container } = render(<Badge content={10} />);
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with children', () => {
      const { container } = render(
        <Badge content={10}>
          <button type="button">badge</button>
        </Badge>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different color', () => {
      const { container } = render(<Badge content={10} color="success" />);
      expect(container).toMatchSnapshot();
    });

    describe('alignments', () => {
      it('should match snapshot with top-left alignment', () => {
        const { container } = render(<Badge content={10} alignment="top-left" />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with top-right alignment', () => {
        const { container } = render(<Badge content={10} alignment="top-right" />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with bottom-left alignment', () => {
        const { container } = render(<Badge content={10} alignment="bottom-left" />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with bottom-right alignment', () => {
        const { container } = render(<Badge content={10} alignment="bottom-right" />);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
