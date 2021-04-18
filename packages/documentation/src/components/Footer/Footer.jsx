import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';
import Wrapper from './styles';

function Footer(props) {
  return (
    <Wrapper {...props}>
      Copyright © {new Date().getFullYear()}{' '}
      <Link as={GatsbyLink} to="/">
        Frigobar
      </Link>
    </Wrapper>
  );
}

export default Footer;
