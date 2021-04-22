import React from 'react';
import PropTypes from 'prop-types';
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

const StyledBadge = styled.span(
  ({
    alignment,
    color,
    hasChildren,
    theme: {
      colors,
      components: { badge },
    },
  }) => `
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${badge.padding}px;

    border-radius: ${badge.border.radius}px;
    background-color: ${(colors[color] && colors[color][500]) || color};

    color: ${colors.white};
    font-size: ${badge.font.size}px;
    line-height: ${badge.font.size}px;
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

const Badge = ({ children, color, theme, content, alignment }) => (
  <Root>
    {children}
    <StyledBadge
      theme={theme}
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

Badge.propTypes = {
  /** change badge color, it can be any color theme property, like "primary", "info", "success", etc. Or a custom name/hex color (#000) */
  color: PropTypes.string,
  /** where badge will be displayed */
  children: PropTypes.node,
  /** the number to be displayed inside badge */
  content: PropTypes.number,
  /** in which component corner to align the badge */
  alignment: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
};

export default Badge;
