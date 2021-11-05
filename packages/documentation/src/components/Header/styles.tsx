import styled, { css } from 'styled-components';
import { Link } from '@frigobar/core';

const Wrapper = styled.header<{ show?: boolean; home?: boolean }>`
  position: relative;
  z-index: 3;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  ${({ show, home, theme: { spacings } }) => css`
    padding: ${spacings.small}px ${spacings.large}px;

    box-shadow: ${home ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.1)'};

    transition: transform 0.3s ease;
    transform: translateX(${show ? '280px' : '0'});
    will-change: transform;

    @media (min-width: 830px) {
      padding: ${spacings.large}px ${spacings.xxlarge}px;
      transform: translateX(0);
    }

    ${home
      ? `
        max-width: 1440px;
        margin: 0 auto;
        width: 100%;
      `
      : ''}
  `}
`;

const Brand = styled(Link)`
  font-size: 1.125rem;

  width: 115px;

  text-indent: -9999px;

  background-image: url('/frigobar.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 115px;

  @media (max-width: 830px) {
    font-size: 1rem;

    width: 105px;
    min-height: 25px;

    background-size: 105px;
  }
`;

const Links = styled.nav`
  font-size: 1rem;

  text-transform: lowercase;

  ${Link} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 830px) {
      margin-right: 10px;
    }
  }

  @media (max-width: 830px) {
    font-size: 0.875rem;
  }
`;

export { Wrapper, Brand, Links };
