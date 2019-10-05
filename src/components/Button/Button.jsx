import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

import skins from './skins';
import defaultTheme from '../../theme';

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 6px 14px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  }

  ${StyledIcon} {
    font-size: 0.875rem;
  }

  ${({ theme, skin, icon }) => `
    background-color: ${skins(theme)[skin].bgColor};
    color: ${skins(theme)[skin].textColor};
    ${icon &&
      `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  `}
`;

const Button = ({ children, icon, theme, ...props }) => (
  <Btn icon={icon} theme={theme} {...props}>
    {icon && <StyledIcon>{icon}</StyledIcon>}
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  skin: PropTypes.oneOf(['primary', 'info', 'success', 'danger', 'warning', 'neutral']),
  icon: PropTypes.string,
  theme: PropTypes.shape({}),
};

Button.defaultProps = {
  theme: defaultTheme,
  skin: 'neutral',
  icon: undefined,
};

export default Button;
