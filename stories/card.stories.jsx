import React from 'react';

import { Button, Card } from '../src/components';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card>
    <Card.Header title="Title" subtitle="Subtitle" />
    <Card.Content>Lorem</Card.Content>
    <Card.Media src="https://dummyimage.com/800x800" />
    <Card.Footer>
      <Button skin="primary">Button</Button>
    </Card.Footer>
  </Card>
);
