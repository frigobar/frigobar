import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  ${({
    theme: {
      radius,
      components: {
        button: { backgroundColor, textColor, sizes },
      },
    },
    skin,
    size,
    disabled,
    full,
    rounded,
    large,
  }) => `
    background-color: ${backgroundColor[skin]};
    color: ${textColor.enabled};
    font-size: ${large ? '1.125' : sizes[size].font}rem;
    padding: ${
      large
        ? `${sizes[size].padding.top * 2}px
           ${sizes[size].padding.right * 2}px
           ${sizes[size].padding.bottom * 2}px
           ${sizes[size].padding.left * 2}px
        `
        : `${sizes[size].padding.top}px
           ${sizes[size].padding.right}px
           ${sizes[size].padding.bottom}px
           ${sizes[size].padding.left}px
        `
    };

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

    ${full ? 'width: 100%;' : ''}
    ${rounded ? `border-radius: ${radius[3]}px` : ''}
  `}
`;

const Button = React.forwardRef(
  ({ children, theme, size, full, ...props }, ref) => (
    <Btn theme={theme} size={size} full={full} ref={ref} {...props}>
      {children}
    </Btn>
  ),
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** change background-color */
  skin: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'danger',
    'warning',
    'neutral',
  ]),
  /** disabled state of the button */
  disabled: PropTypes.bool,
  /** change the width, height and font-size values */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 100% width */
  full: PropTypes.bool,
  /** add border-radius circle */
  rounded: PropTypes.bool,
  /** large button */
  large: PropTypes.bool,
};

Button.defaultProps = {
  skin: 'neutral',
  disabled: false,
  size: 'small',
  full: undefined,
  rounded: undefined,
  large: undefined,
};

export default Button;
