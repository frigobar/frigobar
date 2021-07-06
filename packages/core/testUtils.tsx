import React from 'react';
import PropTypes from 'prop-types';
import {
  render,
  fireEvent,
  waitFor,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, fireEvent, waitFor };
