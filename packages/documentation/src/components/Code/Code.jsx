import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Code = ({ codeString, language, 'react-live': reactLive }) => {
  if (reactLive) {
    return (
      <LiveProvider code={codeString} noInline>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
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
};

Code.defaultProps = {
  codeString: '',
  language: '',
  'react-live': undefined,
};

export default Code;
