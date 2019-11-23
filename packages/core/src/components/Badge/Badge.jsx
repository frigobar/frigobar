import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../../theme';

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
    align-items: center;
    background-color: ${colors[color][500]};
    border-radius: ${badge.border.radius}px;
    color: ${colors.white};
    display: flex;
    font-size: ${badge.font.size}px;
    justify-content: center;
    padding-left: ${badge.padding.left}px;
    padding-right: ${badge.padding.right}px;
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
  theme: defaultTheme,
  color: 'primary',
  children: undefined,
  content: undefined,
  alignment: 'top-right',
};

Badge.propTypes = {
  theme: PropTypes.shape({}),
  color: PropTypes.oneOf(Object.keys(defaultTheme.colors)),
  children: PropTypes.node,
  content: PropTypes.number,
  alignment: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
};

export default Badge;
