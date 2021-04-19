import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';

const Code = ({ codeString, language, 'react-live': reactLive, noInline }) => {
  if (reactLive) {
    return (
      <MDXContext.Consumer>
        {scope => (
          <LiveProvider
            scope={scope}
            code={codeString}
            noInline={noInline}
            theme={githubTheme}
          >
            <LivePreview />
            <LiveEditor />
            <LiveError />
          </LiveProvider>
        )}
      </MDXContext.Consumer>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={githubTheme}
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
  );
};

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  'react-live': PropTypes.bool,
  noInline: PropTypes.bool,
};

Code.defaultProps = {
  codeString: '',
  language: '',
  'react-live': undefined,
  noInline: false,
};

export default Code;
