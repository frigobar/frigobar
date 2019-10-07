import React from 'react';

import { Alert } from '../src/components';

export default {
  title: 'Alert',
  component: Alert,
};

export const Neutral = () => <Alert type="neutral" message="Simple alert" />;
export const Success = () => <Alert type="success" message="Simple alert" />;
export const Danger = () => <Alert type="danger" message="Simple alert" />;
export const Warning = () => <Alert type="warning" message="Simple alert" />;
export const Info = () => <Alert type="info" message="Simple alert" />;
