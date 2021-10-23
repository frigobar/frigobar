import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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
  padding: 0px 1em 0px 3.35em;
  border-radius: 5px;
  border: 1px solid #000;

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
        : `
        &:hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
        }
        `
    }

    ${full ? 'width: 100%;' : ''}
  `};
`;

const InputPassword = forwardRef(
  ({ type, full, theme, disabled, icon, ...props }, ref) => {
    const [showPassword, toggleShowPassword] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      const { current: element } = inputRef;

      if (element.value.length) {
        element.setSelectionRange(element.value.length, element.value.length);
      }
    }, [showPassword]);

    const togglePassword = e => {
      if (e.type === 'click') {
        inputRef.current.focus();
      }

      e.preventDefault();
      toggleShowPassword(!showPassword);
    };

    return (
      <InputContainer>
        <InputComponent
          theme={theme}
          full={full}
          disabled={disabled}
          type={showPassword ? 'text' : 'password'}
          ref={inputRef || ref}
          icon={icon}
          {...props}
        />

        {showPassword ? (
          <Visibility
            width={20}
            height={20}
            onClick={togglePassword}
            role="button"
          />
        ) : (
          <VisibilityOff
            width={20}
            height={20}
            onClick={togglePassword}
            role="button"
          />
        )}
      </InputContainer>
    );
  },
);

InputPassword.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  skin: PropTypes.oneOf(['primary', 'neutral']),
};

InputPassword.defaultProps = {
  type: 'text',
  full: false,
  disabled: false,
  icon: undefined,
  skin: 'primary',
};

export default InputPassword;
