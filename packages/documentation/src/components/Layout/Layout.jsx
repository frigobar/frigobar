import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@frigobar/core';

import { FontStyle, Grid } from './styles';

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <FontStyle />
      <Grid {...props} />
    </ThemeProvider>
  );
}

export default Layout;
