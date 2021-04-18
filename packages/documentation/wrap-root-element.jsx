import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import * as frigobar from '@frigobar/core';

import { Code } from './src/components';

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
  ...frigobar,
};

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export default wrapRootElement;