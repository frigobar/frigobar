import React from 'react';
import { render } from '../../../testUtils';

import Card from './Card';
import Button from '../Button';

describe('<Card />', () => {
  describe('Snapshots', () => {
    const Component = ({ rounded }: { rounded?: boolean }) => (
      <Card maxWidth="400px">
        <Card.Header
          avatarRounded={rounded}
          avatar="https://dummyimage.com/72x72"
        >
          <Card.Title>Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Header>
        <Card.Media src="https://dummyimage.com/600x600" />
        <Card.Content>Lorem</Card.Content>
        <Card.Footer>
          <Button skin="primary" style={{ marginRight: 10 }}>
            Button
          </Button>
          <Button skin="primary">Cancel</Button>
        </Card.Footer>
      </Card>
    );

    it('should match snapshot', () => {
      const { container } = render(<Component />);
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with rounded avatar', () => {
      const { container } = render(<Component rounded />);
      expect(container).toMatchSnapshot();
    });
  });
});
