import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from '../../assets/close.svg';
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
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper = styled.div`
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 10px;
  position: relative;
  ${({ theme, type }) => `
    background-color: ${theme.colors[type][50]};
    border: 1px solid ${theme.colors[type][200]};
    color: ${theme.colors.black};
  `}

  ${CloseButton} {
    top: 10px;
    right: 10px;
  }
`;

const Close = ({ onClick, ...props }) => (
  <CloseButton onClick={onClick}>
    <CloseIcon width="10" height="10" {...props} />
  </CloseButton>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Alert = ({ message, type, closable, theme, onClose, ...props }) => {
  const [closed, setClosed] = useState(closable);
  return !closed ? (
    <Wrapper theme={theme} type={type} {...props}>
      <Close
        theme={theme}
        onClick={e => {
          setClosed(true);
          onClose(e);
        }}
      />
      {message}
    </Wrapper>
  ) : null;
};

Alert.propTypes = {
  message: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'danger', 'warning', 'neutral']),
  theme: PropTypes.shape({}),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: 'neutral',
  theme: defaultTheme,
  closable: undefined,
  onClose: () => {},
};

export default Alert;
