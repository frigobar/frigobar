import React from 'react';

import { Button, Card } from '../src/components';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card maxWidth="400px">
    <Card.Header avatar="https://dummyimage.com/72x72">
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
