import React from 'react';

import { Alert } from '../src/components';

export default {
  title: 'Alert',
  component: Alert,
};

export const Neutral = () => <Alert type="neutral">Simple Alert</Alert>;
export const Success = () => <Alert type="success">Simple alert</Alert>;
export const Danger = () => <Alert type="danger">Simple alert</Alert>;
export const Warning = () => <Alert type="warning">Simple alert</Alert>;
export const Info = () => <Alert type="info">Simple alert</Alert>;
export const Closable = () => (
  <Alert type="success" closable>
    Simple alert
  </Alert>
);
export const ClosableWithText = () => (
  <Alert type="info" closable closeText="Close now">
    Simple alert
  </Alert>
);
