import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import defaultTheme from '../../theme';

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

const Wrapper = styled.div`
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
`;

const Close = ({ onClick, text, theme, ...props }) => (
  <CloseButton onClick={onClick} withText={text} theme={theme} {...props}>
    {!text ? <CloseIcon width="10" height="10" /> : text}
  </CloseButton>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.shape({}).isRequired,
  text: PropTypes.string,
};

Close.defaultProps = {
  text: undefined,
};

const Alert = ({ children, type, closable, theme, onClose, closeText, ...props }) => {
  const [closed, setClosed] = useState(false);

  return !closed ? (
    <Wrapper theme={theme} type={type} {...props}>
      {closable && (
        <Close
          text={closeText}
          theme={theme}
          onClick={e => {
            setClosed(true);
            onClose(e);
          }}
        />
      )}
      {children}
    </Wrapper>
  ) : null;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'danger', 'warning', 'neutral']),
  theme: PropTypes.shape({}),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  closeText: PropTypes.string,
};

Alert.defaultProps = {
  type: 'neutral',
  theme: defaultTheme,
  closable: undefined,
  onClose: () => {},
  closeText: undefined,
};

export default Alert;
