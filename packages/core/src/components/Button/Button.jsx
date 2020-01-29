import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

const StyledIcon = styled(Icon)`
  margin-right: ${({ size }) => (size === 'large' ? '8px' : '6px')};
`;

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 200ms ease-in-out;

  ${({
    theme: {
      components: {
        button: { backgroundColor, textColor, sizes },
      },
    },
    skin,
    icon,
    size,
    disabled,
    full,
  }) => `
    background-color: ${backgroundColor[skin]};
    color: ${textColor.enabled};
    font-size: ${sizes[size].font}rem;
    padding: ${sizes[size].padding.top}px ${sizes[size].padding.right}px ${
    sizes[size].padding.bottom
  }px ${sizes[size].padding.left}px;

    ${
      disabled
        ? `
      background-color: ${backgroundColor.disabled};
      color: ${textColor.disabled};
      cursor: not-allowed;
    `
        : `
        &:hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
        }
        `
    }

    ${StyledIcon} {
      font-size: ${sizes[size].icon}rem;
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

    ${full ? 'width: 100%;' : ''}
  `}
`;

const Button = ({ children, icon, theme, size, full, ...props }) => (
  <Btn icon={icon} theme={theme} size={size} full={full} {...props}>
    {icon && <StyledIcon size={size}>{icon}</StyledIcon>}
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  skin: PropTypes.oneOf(['primary', 'info', 'success', 'danger', 'warning', 'neutral']),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  full: PropTypes.bool,
};

Button.defaultProps = {
  skin: 'neutral',
  disabled: false,
  icon: undefined,
  size: 'small',
  full: false,
};

export default Button;
