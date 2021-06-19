import 'styled-components';
import {} from 'styled-components/cssprop';

type Color = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: Array<number>;
    colors: {
      primary: Color;
      secondary: Color;
      info: Color;
      success: Color;
      warning: Color;
      danger: Color;
      neutral: Color;
      black: string;
      white: string;
    };
    radius: Array<number>;
    spacings: Array<number>;
  }
}
