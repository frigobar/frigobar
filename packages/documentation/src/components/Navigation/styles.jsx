import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Aside = styled.aside`
  grid-area: navigation;
`;
const Nav = styled.nav`
  padding-left: ${({ theme: { spacings } }) => `${spacings.large}px`};
`;
const Title = styled.h3`
  text-transform: capitalize;
`;
const Link = styled(GatsbyLink)`
  display: inline-block;
  width: 100%;
  text-decoration: none;

  ${({ theme: { borders, colors, spacings } }) => `
    padding-left: ${spacings.small}px;
    color: ${colors.neutral[700]};

    &.current {
      border-left: ${borders.medium}px solid ${colors.primary[900]};
      color: ${colors.primary[500]};
    }
  `}
`;
const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const ListItem = styled.li`
  ${({ theme: { spacings } }) => `
    margin-top: ${spacings.large}px;
    margin-bottom: ${spacings.large}px;
  `}
`;

export { Aside, Nav, Title, Link, List, ListItem };
