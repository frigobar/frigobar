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

    background-color: ${hexToRgb(theme.colors.neutral[900], 0.6)};
  `,
);

const Dialog = styled.section(
  ({ theme }) => css`
    position: relative;

    min-width: 200px;
    min-height: 200px;

    padding: ${theme.spacings.medium}px;

    border: ${theme.borders.tiny}px solid ${theme.colors.neutral[300]};
    border-radius: ${theme.radius[2]}px;

    background-color: ${theme.colors.neutral[50]};
  `,
);

const CloseButton = styled.button(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.zero}px;
    right: ${theme.spacings.zero}px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    margin: 0;
    padding: 0;

    border: none;
    background: none;

    cursor: pointer;
  `,
);

export { Backdrop, Dialog, CloseButton };