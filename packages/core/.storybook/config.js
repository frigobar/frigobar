import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);
configure(require.context('../stories', true, /\.stories\.jsx?$/), module);
