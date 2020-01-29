import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Avatar from './Avatar';

const Wrapper = styled.header(
  ({
    theme: {
      components: { card },
    },
  }) => `
  align-items: center;
  display: flex;
  padding:
    ${card.header.padding.top}px
    ${card.header.padding.right}px
    ${card.header.padding.bottom}px
    ${card.header.padding.left}px;
`,
);

const ChildrenWrapper = styled.div(
  ({ hasAvatar, theme: { spacings } }) => `
  ${hasAvatar && `margin-left: ${spacings.small}px;`}
`,
);

const Header = ({
  children,
  avatar,
  avatarRounded,
  theme: {
    components: { card },
  },
  ...props
}) => (
  <Wrapper {...props}>
    {avatar && (
      <Avatar
        src={avatar}
        rounded={avatarRounded}
        width={card.avatar.size}
        height={card.avatar.size}
      />
    )}
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

export default withTheme(Header);
