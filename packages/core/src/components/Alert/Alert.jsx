import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withFade } from '@frigobar/animation';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 5px;
  position: absolute;
  right: 10px;
  transition: background-color 0.2s ease-in-out;
  top: 10px;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${({
    withText,
    theme: {
      colors: { neutral },
    },
  }) =>
    withText &&
    `
    border-radius: none;
    color: ${neutral[700]};
    padding: 0;
    top: 12px;

    &:hover, &:focus {
      background-color: transparent;
      color: ${neutral[900]};
    }
  `}
`;

const Wrapper = withFade(styled.div`
  border-radius: 4px;
  font-size: 0.875rem;
  position: relative;
  ${({
    theme: {
      colors,
      components: {
        alert: {
          backgroundColor,
          border: { width, color: borderColor },
          padding: { top, right, bottom, left },
        },
      },
    },
    type,
  }) => `
    background-color: ${backgroundColor[type]};
    border: ${width}px solid ${borderColor[type]};
    color: ${colors.black};
    padding: ${top}px ${right}px ${bottom}px ${left}px;
  `}
`);

const Close = ({ onClick, text, theme, ariaLabel, ...props }) => (
  <CloseButton
    {...props}
    onClick={onClick}
    withText={text}
    aria-label={text ? undefined : ariaLabel}
    theme={theme}
  >
    {!text ? (
      <CloseIcon width="10" height="10" aria-hidden="true" />
    ) : (
      <span>{text}</span>
    )}
  </CloseButton>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Close.defaultProps = {
  text: undefined,
  ariaLabel: 'close',
};

const Alert = ({
  children,
  type,
  closable,
  theme,
  onClose,
  closeText,
  closeIconAriaLabel,
  ...props
}) => {
  const [show, toggleShow] = useState(true);

  return (
    <Wrapper
      {...props}
      theme={theme}
      renderControl={show}
      fadeIn
      fadeOut
      type={type}
      role="alert"
    >
      {closable && (
        <Close
          text={closeText}
          theme={theme}
          ariaLabel={closeIconAriaLabel}
          onClick={e => {
            toggleShow(false);
            onClose(e);
          }}
        />
      )}
      {children}
    </Wrapper>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'danger', 'warning', 'neutral']),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  closeText: PropTypes.string,
  closeIconAriaLabel: PropTypes.string,
};

Alert.defaultProps = {
  type: 'neutral',
  closable: undefined,
  onClose: () => {},
  closeText: undefined,
  closeIconAriaLabel: undefined,
};

export default Alert;
