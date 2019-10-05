import React from 'react';
import { Button } from '../src/components';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => <Button skin="primary">Hello</Button>;
export const info = () => <Button skin="info">Info</Button>;
export const success = () => <Button skin="success">Success</Button>;
export const warning = () => <Button skin="warning">Warning</Button>;
export const danger = () => <Button skin="danger">Danger</Button>;
export const neutral = () => <Button skin="neutral">Neutral</Button>;
export const Disabled = () => (
  <Button skin="primary" disabled>
    Disabled
  </Button>
);
export const small = () => (
  <Button skin="primary" size="small">
    Small
  </Button>
);
export const medium = () => (
  <Button skin="primary" size="medium">
    Medium
  </Button>
);
export const large = () => (
  <Button skin="primary" size="large">
    Large Button
  </Button>
);
export const withIconSmall = () => (
  <Button skin="primary" icon="face">
    With Icon
  </Button>
);
export const withIconMedium = () => (
  <Button skin="primary" icon="face" size="medium">
    With Icon
  </Button>
);
export const withIconLarge = () => (
  <Button skin="primary" icon="face" size="large">
    With Icon
  </Button>
);
