import React, { useEffect, useContext, useState } from 'react';
import { Alert } from '@frigobar/core';
import styled, { css } from 'styled-components';
import { LiveContext } from 'react-live';

const Container = styled.div(
  ({ height, theme: { spacings } }) => `
    display: flex;
    position: relative;
    margin-top: ${spacings.xxlarge}px;
    width: 100%;
    height: ${height}px;
  `,
);

const sharedStyle = css`
  height: 100%;
  flex-basis: 50%;
`;

const ComponentBackground = styled.div(
  ({ theme: { spacings } }) => `
  ${sharedStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: ${spacings.medium}px;

  background-image: linear-gradient(45deg, #eff2f6 25%, transparent 25%),
    linear-gradient(-45deg, #eff2f6 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #eff2f6 75%),
    linear-gradient(-45deg, transparent 75%, #eff2f6 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,
);

const EditorBackground = styled.div(
  ({ theme: { spacings } }) => `
    ${sharedStyle}

    textarea, pre {
      padding: ${spacings.medium}px !important;
    }
  `,
);

const Tab = styled.div(
  ({ theme: { spacings, radius } }) => `
    position: absolute;
    left: 50%;
    top: -${spacings.xlarge}px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    height: ${spacings.xlarge}px;

    padding: ${spacings.xsmall}px;
    padding-right: ${spacings.medium}px;

    color: white;
    font-size: 0.75rem;

    border-top-right-radius: ${radius[2]}px;
    border-top-left-radius: ${radius[2]}px;

    background-color: #282a36;

    &:before {
      content: '';
      width: 18px;
      height: 18px;

      margin-right: ${spacings.xsmall}px;

      background-image: url('/react.svg');
      background-size: 100%;
    }
  `,
);

const ErrorWrapper = styled(Alert)`
  position: absolute;
  width: 98%;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  pre {
    margin: 0;
    padding: 0;
    color: red;
  }
`;

const Error = () => {
  const [errorString, setErrorString] = useState('');
  const { error } = useContext(LiveContext);

  useEffect(() => {
    if (error) {
      setErrorString(error);
    }
  }, [error]);

  return (
    <ErrorWrapper show={Boolean(error)} type="danger">
      <pre>{errorString}</pre>
    </ErrorWrapper>
  );
};

export { Container, ComponentBackground, EditorBackground, Tab, Error };
