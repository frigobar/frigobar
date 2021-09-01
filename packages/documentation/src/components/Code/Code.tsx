/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/nightOwl';
import { transform } from '@babel/standalone';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';
import { useFade } from '@frigobar/animation';

import { useComponent } from '../../contexts/component';
import {
  Container,
  Tab,
  ComponentBackground,
  EditorBackground,
  Error,
  HighlightBackground,
  ActiveButton,
} from './styles';
import PropsSwitcher from '../PropsSwitcher';

interface CodeProps {
  codeString: string;
  language: Language;
  'react-live'?: string;
  noInline?: boolean;
  height?: string;
  fileName?: string;
}

const Code = ({
  codeString = '',
  language = 'jsx',
  'react-live': reactLive,
  noInline,
  height = '500',
  fileName = '',
}: CodeProps): JSX.Element => {
  const {
    name,
    props: { css, animation, ...props },
  } = useComponent();
  const hasProps = Boolean(Object.keys(props).length);

  const [editedCode, setEditedCode] = useState(codeString);
  const [
    { animation: fadeAnimation, state: fadeState },
    togglePropsSwitcher,
  ] = useFade({
    startOnRender: false,
  });

  if (reactLive) {
    return (
      <Container height={height}>
        <MDXContext.Consumer>
          {scope => (
            <LiveProvider
              scope={{
                ...scope,
                useState,
                useRef,
                styled,
                _styled: styled,
                css,
              }}
              code={editedCode}
              language={language}
              noInline={noInline}
              theme={dracula}
              transformCode={code => {
                try {
                  if (
                    typeof document !== 'undefined' &&
                    typeof window !== 'undefined'
                  ) {
                    const transformed = transform(code, {
                      plugins: [
                        require('@babel/plugin-syntax-jsx'),
                        require('@frigobar/babel-plugin'),
                        require('babel-plugin-styled-components'),
                      ],
                    }).code;

                    const withoutImport = transformed.replace(
                      /import _?styled[0-9]? from "styled-components"/gi,
                      '',
                    );
                    const withoutStyled = withoutImport.replace(
                      /_Styled/g,
                      'Styled',
                    );

                    return withoutStyled;
                  }
                } catch (e) {
                  return code;
                }

                return code;
              }}
            >
              <EditorBackground>
                <Tab>{fileName || `${name}.jsx`}</Tab>
                <LiveEditor
                  style={{ height: '100%', fontSize: 14 }}
                  onChange={newCode => setEditedCode(newCode)}
                  className="live-editor"
                />
              </EditorBackground>
              <ComponentBackground>
                <LivePreview />
              </ComponentBackground>
              <Error />
              {!noInline && hasProps && (
                <div>
                  <ActiveButton onClick={() => togglePropsSwitcher(!fadeState)}>
                    Open props switcher
                  </ActiveButton>
                  {fadeState && (
                    <PropsSwitcher
                      animation={fadeAnimation}
                      currentCode={editedCode}
                      onPropChange={newCode => setEditedCode(newCode)}
                    />
                  )}
                </div>
              )}
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
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </HighlightBackground>
  );
};

export default Code;
