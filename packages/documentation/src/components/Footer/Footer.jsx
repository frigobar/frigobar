import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';
import Wrapper from './styles';

function Footer({ home, children, ...props }) {
  return (
    <Wrapper home={home} {...props}>
      {children}
      copyright ©{new Date().getFullYear()}{' '}
      <Link as={GatsbyLink} to="/">
        frigobar
      </Link>
    </Wrapper>
  );
}

Footer.propTypes = {
  home: PropTypes.bool,
  children: PropTypes.node,
};

Footer.defaultProps = {
  home: false,
  children: undefined,
};

export default Footer;
