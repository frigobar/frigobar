import styled from 'styled-components';
import { Link } from '@frigobar/core';

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  ${({ theme: { spacings } }) => `
    padding: ${spacings.small}px ${spacings.large}px;

    @media (min-width: 768px) {
      padding: ${spacings.large}px ${spacings.xxlarge}px;
    }
  `}
`;

const Brand = styled(Link)`
  font-size: 1.125rem;
  font-weight: 900;

  color: ${({ theme: { colors } }) => colors.primary[900]};
`;

const Links = styled.nav`
  font-size: 1rem;
  text-transform: uppercase;

  ${Link} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export { Wrapper, Brand, Links };
