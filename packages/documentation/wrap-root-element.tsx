import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import styled, { css } from 'styled-components';
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

const Pre = preProps => {
  const props = preToCodeBlock(preProps);
  if (props) {
    return <Code {...props} />;
  }
  return <pre {...preProps} />;
};

const components = {
  pre: Pre,
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
  styled,
};

const wrapRootElement = ({
  element,
}: {
  element: React.ReactNode;
}): JSX.Element => (
  <frigobar.ThemeProvider>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </frigobar.ThemeProvider>
);

export default wrapRootElement;
