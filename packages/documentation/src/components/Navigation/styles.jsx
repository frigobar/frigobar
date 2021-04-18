import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Nav = styled.nav`
  grid-area: navigation;
`;
const Title = styled.h3``;
const Link = styled(GatsbyLink)``;
const List = styled.ul``;
const ListItem = styled.li``;

export { Nav, Title, Link, List, ListItem };
