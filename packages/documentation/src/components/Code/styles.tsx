import React, { useEffect, useContext, useState } from 'react';
import { Alert } from '@frigobar/core';
import styled, { css } from 'styled-components';
import { LiveContext } from 'react-live';

const Container = styled.div<{ height: string }>(
  ({ height, theme: { spacings } }) => css`
    position: relative;

    display: flex;
    flex-wrap: wrap;

    width: 100%;
    min-height: ${height}px;

    margin-top: ${spacings.xxlarge}px;

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
    height: 100%;
    min-height: 250px;
  }
`;

const HighlightBackground = styled.div`
  font-size: 0.75rem !important;

  border-radius: 8px;

  .prism-code {
    border-radius: 8px;
  }
`;

const ComponentBackground = styled.div(
  ({ theme: { spacings } }) => css`
    ${sharedStyle}

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${spacings.medium}px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    background-image: linear-gradient(45deg, #eff2f6 25%, transparent 25%),
      linear-gradient(-45deg, #eff2f6 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #eff2f6 75%),
      linear-gradient(-45deg, transparent 75%, #eff2f6 75%);
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    background-size: 20px 20px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
    }
  `,
);

const EditorBackground = styled.div(
  ({ theme: { spacings, radius } }) => css`
    position: relative;
    ${sharedStyle}

    div, textarea, pre {
      font-size: 0.75rem !important;
    }

    .live-editor {
      border-bottom-left-radius: 8px;

      @media (max-width: 830px) {
        border-top-right-radius: ${radius[2]}px;
        border-bottom-left-radius: 0;
      }
    }

    textarea,
    pre {
      padding: ${spacings.medium}px ${spacings.medium}px ${spacings.xxxlarge}px
        ${spacings.medium}px !important;
    }
  `,
);

const Tab = styled.div(
  ({ theme: { spacings, radius } }) => css`
    font-size: 0.75rem;

    position: absolute;
    z-index: 1;
    top: -${spacings.xlarge}px;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: ${spacings.xlarge}px;

    padding: ${spacings.xsmall}px;
    padding-right: ${spacings.medium}px;

    color: white;

    border-top-left-radius: ${radius[2]}px;
    border-top-right-radius: ${radius[2]}px;

    background-color: #011627;

    + div {
      min-height: 250px;
    }

    &:before {
      width: 18px;
      height: 18px;

      margin-right: ${spacings.xsmall}px;

      content: '';

      background-image: url('/react.svg');
      background-size: 100%;
    }
  `,
);

const ErrorWrapper = styled(Alert)`
  position: absolute;
  right: 2%;
  bottom: 20px;

  width: 48%;

  transform: translateX(2%);

  pre {
    margin: 0;
    padding: 0;

    color: red;
  }
`;

const BottomBar = styled.nav`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 40px;

  border-top: 1px solid #69bffd;
`;

type PropSwitcherButtonProps = {
  opened: boolean;
};

const PropSwitcherButton = styled.button<PropSwitcherButtonProps>(
  ({ theme, opened }) => css`
    overflow: hidden;

    width: 40px;
    height: 100%;

    cursor: pointer;

    text-indent: -9999px;

    border: none;

    background-color: ${opened
      ? theme.colors.secondary[500]
      : theme.colors.neutral[600]};

    mask-image: url('/icons/property.svg');
    mask-size: 25px;
    mask-repeat: no-repeat;
    mask-position: center;
  `,
);

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
  PropSwitcherButton,
  BottomBar,
};
