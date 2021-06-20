import React from 'react';
import styled, { withTheme, DefaultTheme } from 'styled-components';

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

const ChildrenWrapper = styled.div<{ hasAvatar: boolean }>(
  ({ hasAvatar, theme: { spacings } }) => `
  ${hasAvatar && `margin-left: ${spacings.small}px;`}
`,
);

export interface HeaderProps {
  children: React.ReactNode;
  /** an image url to be displayed as an avatar */
  avatar?: string;
  /** change border-radius to 9999 */
  avatarRounded?: boolean;
  theme: DefaultTheme;
}

const Header = ({
  children,
  avatar,
  avatarRounded,
  theme: {
    components: { card },
  },
  ...props
}: HeaderProps) => (
  <Wrapper {...props}>
    {avatar && (
      <Avatar
        src={avatar}
        rounded={avatarRounded}
        width={card.avatar.size}
        height={card.avatar.size}
      />
    )}
    <ChildrenWrapper hasAvatar={Boolean(avatar)}>{children}</ChildrenWrapper>
  </Wrapper>
);

Header.defaultProps = {
  avatar: undefined,
  avatarRounded: undefined,
};

Header.displayName = 'Card.Header';

export default withTheme(Header);
