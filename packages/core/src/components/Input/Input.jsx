import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  flex: 1 1 0%;

  ${({ icon }) =>
    icon
      ? `
    position: absolute;
    left: 16px;
;
    top: 50%;
    transform: translateY(-50%);
    fill: rgb(40, 39, 44);
    font-size: 14px;
    transition: fill 0.2s ease 0s;
  `
      : ``}
`;

const InputComponent = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding: 0px 1em 0px 2.65em;
  border-radius: 5px;

  ${({
    theme: {
      components: {
        input: { backgroundColor, sizes, textColor },
      },
    },
    skin,
    full,
    disabled,
    size,
  }) => `
    background-color: ${backgroundColor[skin]};
    color: ${textColor.enabled};
    font-size: ${sizes[size].font}rm;
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

    ${full ? 'width: 100%;' : ''}
  `}
`;

const Input = forwardRef(
  ({ type, full, theme, size, disabled, icon, ...props }, ref) => (
    <InputContainer>
      {icon}
      <InputComponent
        theme={theme}
        full={full}
        size={size}
        disabled={disabled}
        type={type || 'text'}
        ref={ref}
        {...props}
      />
    </InputContainer>
  ),
);

Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  skin: PropTypes.oneOf(['primary', 'neutral']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Input.defaultProps = {
  type: 'text',
  full: false,
  disabled: false,
  icon: undefined,
  skin: 'primary',
  size: 'small',
};

export default Input;
