import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../../theme';

const Root = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledBadge = styled.span(
  ({
    color,
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
  `,
);

const Badge = ({ children, color, theme }) => (
  <Root>
    <StyledBadge theme={theme} color={color}>
      {children}
    </StyledBadge>
  </Root>
);

Badge.defaultProps = {
  theme: defaultTheme,
  color: 'primary',
};

Badge.propTypes = {
  theme: PropTypes.shape({}),
  color: PropTypes.oneOf(Object.keys(defaultTheme.colors)),
};

export default Badge;
