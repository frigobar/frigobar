import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

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

const sizes = ({ spacings }: DefaultTheme) => ({
  small: {
    font: 0.875,
    icon: 1,
    padding: {
      top: spacings.xxsmall,
      right: spacings.small,
      bottom: spacings.xxsmall,
      left: spacings.small,
    },
  },
  medium: {
    font: 1,
    icon: 1.275,
    padding: {
      top: spacings.xsmall,
      right: spacings.medium,
      bottom: spacings.xsmall,
      left: spacings.medium,
    },
  },
  large: {
    font: 1.275,
    icon: 1.5,
    padding: {
      top: spacings.small,
      right: spacings.large,
      bottom: spacings.small,
      left: spacings.large,
    },
  },
});

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  ${({
    theme,
    skin = 'neutral',
    size = 'small',
    disabled,
    full,
    rounded,
    large,
  }) => {
    const { radius, colors } = theme;

    return `
      background-color: ${colors[skin][500]};
      color: ${colors.neutral[50]};
      font-size: ${large ? '1.125' : sizes(theme)[size].font}rem;
      padding: ${
        large
          ? `${sizes(theme)[size].padding.top * 2}px
             ${sizes(theme)[size].padding.right * 2}px
             ${sizes(theme)[size].padding.bottom * 2}px
             ${sizes(theme)[size].padding.left * 2}px
          `
          : `${sizes(theme)[size].padding.top}px
             ${sizes(theme)[size].padding.right}px
             ${sizes(theme)[size].padding.bottom}px
             ${sizes(theme)[size].padding.left}px
          `
      };
  
      ${
        disabled
          ? `
        background-color: ${colors.neutral[100]};
        color: ${colors.neutral[400]};
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
    `;
  }};
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
