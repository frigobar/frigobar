import React from 'react';

import { Badge, Button } from '../src/components';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <Badge content={10}>
    <Button>Alou</Button>
  </Badge>
);
