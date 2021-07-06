import React, { useEffect, useContext, useState } from 'react';
import { Alert } from '@frigobar/core';
import styled, { css } from 'styled-components';
import { LiveContext } from 'react-live';

const Container = styled.div<{ height: string }>(
  ({ height, theme: { spacings } }) => `
    display: flex;
    position: relative;
    margin-top: ${spacings.xxlarge}px;
    width: 100%;
    min-height: ${height}px;

    box-shadow: 0px 0px 20px rgb(0 0 0 / 30%);
    border-radius: 8px;

    @media (max-width: 830px) {
      display: block;
    }
  `,
);

const sharedStyle = css`
  flex-basis: 50%;
  flex-shrink: 0;

  @media (max-width: 830px) {
    min-height: 250px;
    height: 100%;
  }
`;

const HighlightBackground = styled.div`
  font-size: 0.75rem !important;

  box-shadow: 0px 0px 20px rgb(0 0 0 / 30%);
  border-radius: 8px;

  .prism-code {
    border-radius: 8px;
  }
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

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

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
    position: relative;
    ${sharedStyle}

    div, textarea, pre {
      font-size: 0.75rem !important;
    }

    .live-editor {
      border-bottom-left-radius: 8px;
    }
    
    textarea, pre {
      padding: ${spacings.medium}px !important;
    }
  `,
);

const Tab = styled.div(
  ({ theme: { spacings, radius } }) => `
    position: absolute;
    left: 0;
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

    background-color: #011627;

    + div {
      min-height: 250px;
    }

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
  width: 48%;
  right: 2%;
  bottom: 20px;
  transform: translateX(2%);

  pre {
    margin: 0;
    padding: 0;
    color: red;
  }
`;

const Error = (): JSX.Element => {
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

export {
  Container,
  ComponentBackground,
  EditorBackground,
  Tab,
  Error,
  HighlightBackground,
};
