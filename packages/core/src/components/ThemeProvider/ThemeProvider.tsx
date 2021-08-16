import { FlattenSimpleInterpolation, CSSProp } from 'styled-components';

import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import defaultTheme from '../../theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: DefaultTheme;
}

import { IBorders } from '../../theme/default/borders';
import { ISpacings } from '../../theme/default/spacings';
import { IColor } from '../../theme/default/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: IBorders;
    colors: {
      primary: IColor;
      secondary: IColor;
      info: IColor;
      success: IColor;
      warning: IColor;
      danger: IColor;
      neutral: IColor;
      black: string;
      white: string;
    };
    radius: Array<number>;
    spacings: ISpacings;
    baseFontSize: number;
  }
}

declare module 'react' {
  interface Attributes {
    animation?: FlattenSimpleInterpolation;
    css?: CSSProp<DefaultTheme>;
  }
}

const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
