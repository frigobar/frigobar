import React from 'react';
import PropTypes from 'prop-types';
import { Aside, Nav, Title, List, ListItem, Link } from './styles';

function Navigation({ items }) {
  return (
    <Aside>
      <Nav>
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
  );
}

Navigation.propTypes = {
  items: PropTypes.shape({
    guide: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
    components: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Navigation;
