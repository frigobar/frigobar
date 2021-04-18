import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

function Navigation({ items }) {
  return (
    <Styles.Nav>
      {items.map(({ category, pages }) => (
        <React.Fragment key={category}>
          <Styles.Title>{category}</Styles.Title>
          <Styles.List>
            {pages.map(({ name, url }) => (
              <Styles.ListItem key={name}>
                <Styles.Link to={url}>{name}</Styles.Link>
              </Styles.ListItem>
            ))}
          </Styles.List>
        </React.Fragment>
      ))}
    </Styles.Nav>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

export default Navigation;
