import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '@frigobar/core';

import { Wrapper, Brand, Links } from './styles';

interface HeaderProps {
  home?: boolean;
  show?: boolean;
}
function Header({ home, show, ...props }: HeaderProps): JSX.Element {
  return (
    <Wrapper home={home} show={show} {...props}>
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

Header.defaultProps = {
  home: false,
};

export default Header;
