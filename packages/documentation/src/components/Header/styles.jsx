import styled from 'styled-components';
import { Link } from '@frigobar/core';

const Wrapper = styled.header`
  position: relative;
  z-index: 3;

  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  ${({ show, theme: { spacings } }) => `
    padding: ${spacings.small}px ${spacings.large}px;

    transition: transform 0.3s ease;
    transform: translateX(${show ? '280px' : '0'});
    will-change: transform;

    @media (min-width: 830px) {
      padding: ${spacings.large}px ${spacings.xxlarge}px;
      transform: translateX(0);
    }
  `}
`;

const Brand = styled(Link)`
  background-image: url('/frigobar.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 115px;

  font-size: 1.125rem;
  text-indent: -9999px;
  width: 115px;

  @media (max-width: 830px) {
    font-size: 1rem;
  }
`;

const Links = styled.nav`
  font-size: 1rem;
  text-transform: lowercase;

  @media (max-width: 830px) {
    font-size: 0.875rem;
  }

  ${Link} {
    margin-right: 20px;

    @media (max-width: 830px) {
      margin-right: 10px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export { Wrapper, Brand, Links };
