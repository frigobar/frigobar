import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@frigobar/core';

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <div {...props} />
    </ThemeProvider>
  );
}

export default Layout;
