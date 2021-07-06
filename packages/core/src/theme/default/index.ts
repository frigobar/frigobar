import { DefaultTheme } from 'styled-components';
import colors from './colors';
import spacings from './spacings';
import borders from './borders';
import radius from './radius';
import baseFontSize from './fontSize';

const theme: DefaultTheme = {
  colors,
  spacings,
  borders: borders,
  radius,
  baseFontSize,
};

export default theme;
