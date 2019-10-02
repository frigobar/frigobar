import React from 'react';
import { Button } from '../src/components';

export default {
  title: 'Design System|Atoms/Button',
  component: Button,
};

export const primary = () => <Button skin="primary">Hello</Button>;
export const info = () => <Button skin="info">Info</Button>;
export const success = () => <Button skin="success">Success</Button>;
export const warning = () => <Button skin="warning">Warning</Button>;
export const danger = () => <Button skin="danger">Danger</Button>;
export const neutral = () => <Button skin="neutral">Neutral</Button>;
