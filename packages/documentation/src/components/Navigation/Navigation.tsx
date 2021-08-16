import React, { forwardRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Aside, Nav, Title, List, ListItem, Link } from './styles';

const BodyOverflow = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    overflow-y: hidden;
  }
`;

interface CategoryType {
  name: string;
  category: string;
  url: string;
}

interface Props {
  items:
    | {
        guide: Array<CategoryType>;
        components: Array<CategoryType>;
      }
    | {};
  show: boolean;
}

const Navigation = forwardRef<HTMLElement, Props>(({ items, show }, ref) => (
  <Aside show={show} ref={ref}>
    {show && <BodyOverflow />}
    <Nav show={show}>
      {Object.keys(items)
        .sort(item => (item === 'guide' ? -1 : 1))
        .map(category => (
          <React.Fragment key={category}>
            <Title>{category}</Title>
            <List>
              {items[category]
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map(({ name, url }) => (
                  <ListItem key={name}>
                    <Link to={url} activeClassName="current">
                      {name}
                    </Link>
                  </ListItem>
                ))}
            </List>
          </React.Fragment>
        ))}
    </Nav>
  </Aside>
));

Navigation.displayName = 'Navigation';

export default Navigation;
