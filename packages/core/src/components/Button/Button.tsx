import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  /** Change background-color */
  skin?: 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'neutral';
  /** change the width, height and font-size values */
  size?: 'small' | 'medium' | 'large' | undefined;
  /** Change disabled state of the button */
  disabled?: boolean;
  /** 100% width */
  full?: boolean;
  /** add border-radius circle */
  rounded?: boolean;
  /** large button */
  large?: boolean;
}

const Button = styled.button<ButtonProps>`
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

Button.defaultProps = {
  skin: 'neutral',
  disabled: false,
  size: 'small',
  full: undefined,
  rounded: undefined,
  large: undefined,
};

export default Button;
