import React from 'react';
import { PersonOutline } from '@material-ui/icons';
import { Input, InputPassword } from '../src/components';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => <Input skin="primary" placeholder="Default" />;
export const Disabled = () => (
  <Input skin="primary" disabled placeholder="Disabled" />
);
export const WithIcon = () => (
  <Input skin="primary" placeholder="With Icon" icon={<PersonOutline />} />
);
export const Password = () => (
  <InputPassword skin="primary" type="password" placeholder="Password" />
);
