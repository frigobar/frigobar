import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

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
  outline?: boolean;
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

const Button = styled.button<ButtonProps>(
  ({
    theme,
    skin = 'neutral',
    size = 'small',
    disabled,
    full,
    rounded,
    outline,
  }) => {
    const { radius, colors } = theme;

    return css`
      font-size: 0.875rem;
      font-size: ${sizes(theme)[size].font}rem;

      padding: ${sizes(theme)[size].padding.top}px
        ${sizes(theme)[size].padding.right}px
        ${sizes(theme)[size].padding.bottom}px
        ${sizes(theme)[size].padding.left}px;

      cursor: pointer;

      transition: all 200ms ease-in-out;

      text-decoration: none;

      color: ${colors.neutral[50]};
      border: 2px solid transparent;
      border-radius: 4px;
      
      background-color: ${colors[skin][800]};

      ${full ? 'width: 100%;' : ''}
      ${
        rounded
          ? css`
              border-radius: ${radius[3]}px;
            `
          : ''
      }

      ${
        outline
          ? css`
              background-color: ${colors[skin][50]};
              color: ${colors[skin][900]};
              border-color: ${colors[skin][900]};
            `
          : ''
      }

      ${
        disabled
          ? css`
              cursor: not-allowed;
              color: ${colors.neutral[400]};
              background-color: ${colors.neutral[100]};
              border-color: transparent;
            `
          : css`
              &:hover {
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
              }
            `
      }
    `;
  },
);

Button.defaultProps = {
  skin: 'neutral',
  disabled: false,
  size: 'small',
  full: undefined,
  rounded: undefined,
};

export default Button;
