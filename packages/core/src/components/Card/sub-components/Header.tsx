import React from 'react';
import styled, { withTheme, DefaultTheme } from 'styled-components';

import { Avatar } from '../styles';

const Wrapper = styled.header(
  ({ theme: { spacings } }) => `
    align-items: center;
    display: flex;
    padding:
      ${spacings.medium}px
      ${spacings.medium}px
      ${spacings.xsmall}px
      ${spacings.medium}px;
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

const Header = ({ children, avatar, avatarRounded, ...props }: HeaderProps) => (
  <Wrapper {...props}>
    {avatar && (
      <Avatar src={avatar} rounded={avatarRounded} width={72} height={72} />
    )}
    <ChildrenWrapper hasAvatar={Boolean(avatar)}>{children}</ChildrenWrapper>
  </Wrapper>
);

Header.displayName = 'Card.Header';

export default withTheme(Header);
