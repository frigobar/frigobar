import React from 'react';

import { Badge, Button } from '../src/components';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <Badge content={10} alignment="top-right">
    <Button>Button</Button>
  </Badge>
);
