import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';
import Wrapper from './styles';

function Footer(props) {
  return (
    <Wrapper {...props}>
      copyright ©{new Date().getFullYear()}{' '}
      <Link as={GatsbyLink} to="/">
        frigobar
      </Link>
    </Wrapper>
  );
}

export default Footer;
