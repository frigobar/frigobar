import styled, { css } from 'styled-components';

import hexToRgb from '../../utils/hexToRgb';

const Backdrop = styled.div(
  ({ theme }) => css`
    position: fixed;
    inset: 0;

    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${hexToRgb(theme.colors.black, 0.6)};

    @media (max-width: 768px) {
      align-items: flex-end;
    }
  `,
);

interface IDialog {
  minHeight: string;
}

const Dialog = styled.section<IDialog>(
  ({ theme, minHeight }) => css`
    position: relative;

    min-width: 200px;
    min-height: ${minHeight};

    padding: ${theme.spacings.medium}px;

    border-radius: ${theme.radius[2]}px;

    background-color: ${theme.colors.neutral[50]};

    @media (max-width: 768px) {
      width: 100%;

      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
);

const CloseButton = styled.button(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall}px;
    right: ${theme.spacings.xsmall}px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    margin: 0;
    padding: 0;

    cursor: pointer;

    border: none;
    border-radius: ${theme.radius[3]}px;

    background-color: ${theme.colors.neutral[50]};

    svg {
      stroke: ${theme.colors.neutral[900]};
    }

    &:hover {
      background-color: ${theme.colors.neutral[200]};
    }
  `,
);

export { Backdrop, Dialog, CloseButton };
