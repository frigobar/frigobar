import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 16px 16px 8px;
`;

const ChildrenWrapper = styled.div`
  ${({ hasAvatar }) => hasAvatar && 'padding-left: 12px;'}
`;

const Header = ({ children, avatar, avatarRounded, ...props }) => (
  <Wrapper {...props}>
    {avatar && <Avatar src={avatar} rounded={avatarRounded} />}
    <ChildrenWrapper hasAvatar={avatar}>{children}</ChildrenWrapper>
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string,
  avatarRounded: PropTypes.bool,
};

Header.defaultProps = {
  avatar: undefined,
  avatarRounded: undefined,
};

Header.displayName = 'Card.Header';

export default Header;
