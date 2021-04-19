import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';

import { Wrapper, Brand, Links } from './styles';

function Header(props) {
  return (
    <Wrapper {...props}>
      <Brand as={GatsbyLink} to="/">
        Frigobar
      </Brand>
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
    </Wrapper>
  );
}

export default Header;
