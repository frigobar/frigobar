import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  flex: 1 1 0%;

  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    fill: rgb(40, 39, 44);
    font-size: 1.3rem;
    transition: fill 0.2s ease 0s;
  }
`;

const InputComponent = styled.input`
  height: 35px;
  font-size: 14px;
  padding: ${({ icon }) => (icon ? '0px 1em 0px 3.35em' : '0px 1em 0px 1em')};
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;

  ${({
    theme: {
      components: {
        input: { backgroundColor, textColor },
      },
    },
    skin,
    full,
    disabled,
  }) => `
    background-color: ${backgroundColor[skin]};
    color: ${textColor.enabled};
    ${
      disabled
        ? `
      background-color: ${backgroundColor.disabled};
      color: ${textColor.disabled};
      cursor: not-allowed;
    `
        : ``
    }

    ${full ? 'width: 100%;' : ''}
  `};
`;

const Input = forwardRef(
  ({ type, full, theme, disabled, icon, ...props }, ref) => {
    return (
      <InputContainer>
        {icon}
        <InputComponent
          theme={theme}
          full={full}
          disabled={disabled}
          type={type || 'text'}
          ref={ref}
          icon={icon}
          {...props}
        />
      </InputContainer>
    );
  },
);

Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  skin: PropTypes.oneOf(['primary', 'neutral']),
};

Input.defaultProps = {
  type: 'text',
  full: false,
  disabled: false,
  icon: undefined,
  skin: 'primary',
};

export default Input;
