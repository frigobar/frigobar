import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';

import { useComponent } from '../../contexts/component';
import {
  Container,
  Tab,
  ComponentBackground,
  EditorBackground,
  Error,
  HighlightBackground,
} from './styles';

const Code = ({
  codeString,
  language,
  'react-live': reactLive,
  noInline,
  height,
}) => {
  const { name } = useComponent();

  if (reactLive) {
    return (
      <Container height={height}>
        <Tab>
          {name}
          .jsx
        </Tab>
        <MDXContext.Consumer>
          {scope => (
            <LiveProvider
              scope={{ ...scope, useState, useRef, styled }}
              code={codeString}
              noInline={noInline}
              theme={dracula}
            >
              <ComponentBackground>
                <LivePreview />
              </ComponentBackground>
              <EditorBackground>
                <LiveEditor style={{ height: '100%', fontSize: 14 }} />
              </EditorBackground>
              <Error>
                <LiveError />
              </Error>
            </LiveProvider>
          )}
        </MDXContext.Consumer>
      </Container>
    );
  }
  return (
    <HighlightBackground>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={dracula}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </HighlightBackground>
  );
};

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  'react-live': PropTypes.string,
  noInline: PropTypes.bool,
  height: PropTypes.string,
};

Code.defaultProps = {
  codeString: '',
  language: '',
  'react-live': undefined,
  noInline: false,
  height: '500',
};

export default Code;
