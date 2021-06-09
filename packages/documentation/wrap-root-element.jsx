import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { ThemeProvider, css } from 'styled-components';
import * as frigobar from '@frigobar/core';
import * as animations from '@frigobar/animation';

import {
  Code,
  PropsTable,
  GlobalStyle,
  InlineCode,
  Blockquote,
  Wrapper,
} from './src/components';
import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
} from './src/components/PropsTable/styles';

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  inlineCode: InlineCode,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  th: Th,
  tr: Tr,
  td: Td,
  PropsTable,
  blockquote: Blockquote,
  Wrapper,
  ...frigobar,
  ...animations,
  css,
};

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={frigobar.theme}>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);

export default wrapRootElement;
