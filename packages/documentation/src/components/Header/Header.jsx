import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';

import { Wrapper, Brand, Links } from './styles';

function Header({ home, ...props }) {
  return (
    <Wrapper home={home} {...props}>
      <Brand as={GatsbyLink} to="/">
        Frigobar
      </Brand>
      {!home && (
        <Links>
          <Link as={GatsbyLink} to="/animation/getting-started/">
            Animation
          </Link>
          <Link as={GatsbyLink} to="/components/getting-started/">
            Components
          </Link>
          <Link href="https://github.com/frigobar/frigobar" target="_blank">
            Github
          </Link>
        </Links>
      )}
    </Wrapper>
  );
}

Header.propTypes = {
  home: PropTypes.bool,
};

Header.defaultProps = {
  home: false,
};

export default Header;
