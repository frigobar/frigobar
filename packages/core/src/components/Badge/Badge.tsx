import React from 'react';
import styled from 'styled-components';

const badgeAlignment = {
  'top-left': `
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  `,
  'top-right': `
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  `,
  'bottom-left': `
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  `,
  'bottom-right': `
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  `,
};

const Root = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledBadge = styled.span<{
  alignment: BadgeProps['alignment'];
  color: BadgeProps['color'];
  hasChildren: boolean;
}>(
  ({
    alignment,
    color,
    hasChildren,
    theme: { colors, spacings, radius, baseFontSize },
  }) => `
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${spacings.xxsmall}px;

    border-radius: ${radius[1]}px;
    background-color: ${(colors[color] && colors[color][500]) || color};

    color: ${colors.white};
    font-size: ${baseFontSize * 0.75}px;
    line-height: ${baseFontSize * 0.75}px;
    ${
      hasChildren
        ? `
            position: absolute;
            ${badgeAlignment[alignment]}
          `
        : ''
    }
  `,
);

interface BadgeProps {
  /** where badge will be displayed */
  children?: React.ReactNode;
  /** change badge color, it can be any color theme property, like "primary", "info", "success", etc. Or a custom name/hex color (#000) */
  color:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral';
  /** the number to be displayed inside badge */
  content: number;
  /** in which component corner to align the badge */
  alignment: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Badge = ({
  children,
  color,
  content,
  alignment,
}: BadgeProps): JSX.Element => (
  <Root>
    {children}
    <StyledBadge
      color={color}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      hasChildren={Boolean(React.Children.count(children))}
      alignment={alignment}
    >
      {content}
    </StyledBadge>
  </Root>
);

Badge.defaultProps = {
  color: 'primary',
  children: undefined,
  content: undefined,
  alignment: 'top-right',
};

export default Badge;
