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
  minWidth: string;
}

const Dialog = styled.section<IDialog>(
  ({ theme, minHeight, minWidth }) => css`
    position: relative;

    min-width: 200px;
    min-height: ${minHeight};
    max-height: 80vh;
    min-width: ${minWidth};

    border-radius: ${theme.radius[2]}px;

    background-color: ${theme.colors.neutral[50]};

    overflow: auto;

    @media (max-width: 768px) {
      width: 100%;

      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
);

interface IHeaderProps {
  sticked: boolean;
}

const Header = styled.div<IHeaderProps>(
  ({ sticked, theme }) => css`
    position: sticky;
    top: -1px;
    left: 0;

    padding: ${theme.spacings.medium}px;

    background-color: ${theme.colors.neutral[50]};

    ${sticked &&
      css`
        padding-top: ${theme.spacings.medium + 1}px;

        box-shadow: 0px -2px 5px #000;

        ${CloseButton} {
          top: ${theme.spacings.small + 1}px;
        }
      `}
  `,
);

const Body = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacings.medium}px;
  `,
);

const Title = styled.h3`
  font-size: 1.125rem;
  margin: 0;
`;

const CloseButton = styled.button(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.small}px;
    right: ${theme.spacings.small}px;

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

export { Backdrop, Dialog, Header, Body, Title, CloseButton };
