import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

import defaultTheme from '../../theme';

const StyledIcon = styled(Icon)`
  margin-right: ${({ size }) => (size === 'large' ? '8px' : '6px')};
`;

const ButtonSizes = {
  small: {
    fontSize: '0.875rem',
    iconSize: '1rem',
    paddings: '6px 14px',
  },
  medium: {
    fontSize: '1rem',
    iconSize: '1.275rem',
    paddings: '10px 18px',
  },
  large: {
    fontSize: '1.275rem',
    iconSize: '1.5rem',
    paddings: '12px 20px',
  },
};

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 200ms ease-in-out;

  ${({ theme, skin, icon, size, disabled }) => `
    background-color: ${theme.colors[skin][500]};
    color: ${theme.colors.neutral[50]};
    font-size: ${ButtonSizes[size].fontSize};
    padding: ${ButtonSizes[size].paddings};

    ${
      disabled
        ? `
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[400]};
      cursor: not-allowed;
    `
        : `
        &:hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
        }
        `
    }

    ${StyledIcon} {
      font-size: ${ButtonSizes[size].iconSize};
    }

    ${
      icon
        ? `
      display: flex;
      align-items: center;
      justify-content: center;
    `
        : ''
    }
  `}
`;

const Button = ({ children, icon, theme, size, ...props }) => (
  <Btn icon={icon} theme={theme} size={size} {...props}>
    {icon && <StyledIcon size={size}>{icon}</StyledIcon>}
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  skin: PropTypes.oneOf(['primary', 'info', 'success', 'danger', 'warning', 'neutral']),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  theme: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  theme: defaultTheme,
  skin: 'neutral',
  disabled: false,
  icon: undefined,
  size: 'small',
};

export default Button;
