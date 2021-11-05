import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Aside = styled.aside<{ show?: boolean }>(
  ({ show, theme: { borders, colors } }) => css`
    height: 100%;
    grid-area: navigation;

    border-right: ${borders.small}px solid ${colors.neutral[100]};

    @media (max-width: 830px) {
      position: fixed;
      z-index: 4;
      top: 0;

      width: 100%;
      max-width: 280px;

      transition: transform 0.3s ease;
      transform: translateX(-100%);

      border-right: none;
      background-color: ${colors.white};

      will-change: transform;

      ${show
        ? css`
            transform: translateX(0);

            ~ div,
            ~ footer {
              pointer-events: none;

              transform: translateX(280px);
            }
          `
        : ''}

      ~ div,
      ~ footer {
        transition: transform 0.3s ease;
        transform: translateX(0);

        will-change: transform;
      }
    }
  `,
);
const Nav = styled.nav<{ show: boolean }>(
  ({ show, theme: { spacings, colors } }) => css`
    overflow: auto;

    height: 100%;

    padding-top: ${spacings.small}px;

    transition: box-shadow 0.3s ease;

    background-color: ${colors.white};

    box-shadow: none;

    @media (max-width: 830px) {
      ${show
        ? css`
            height: 100%;
            box-shadow: -3px 0px 8px #000,
              0px -5px 100px 10000px rgb(0 0 0 / 30%);
          `
        : ''}
    }
  `,
);
const Title = styled.h3`
  padding-right: ${({ theme: { spacings } }) => `${spacings.xxlarge}`}px;
  padding-left: ${({ theme: { spacings } }) => `${spacings.xxlarge}`}px;

  text-transform: capitalize;
`;
const Link = styled(GatsbyLink)`
  display: inline-block;

  width: 100%;

  text-decoration: none;

  ${({ theme: { colors, spacings } }) => css`
    padding-left: ${spacings.small}px;
    color: ${colors.neutral[700]};

    &.current {
      color: ${colors.secondary[500]};
      background-color: ${colors.secondary[50]};
    }
  `}
`;
const List = styled.ul`
  padding-left: 0;

  list-style: none;
`;
const ListItem = styled.li`
  ${({ theme: { spacings } }) => css`
    margin-top: ${spacings.small}px;
    margin-bottom: ${spacings.small}px;

    a {
      padding-top: ${spacings.xsmall}px;
      padding-left: ${spacings.xxxlarge}px;
      padding-right: ${spacings.xxlarge}px;
      padding-bottom: ${spacings.xsmall}px;
    }
  `}
`;

export { Aside, Nav, Title, Link, List, ListItem };
