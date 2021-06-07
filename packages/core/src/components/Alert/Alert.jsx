import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFade } from '@frigobar/animation';

import CloseIcon from '../../assets/close.svg';

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
  show,
  ...props
}) => {
  const [{ animation, state }, toggle] = useFade({ startOnRender: show });

  useEffect(() => {
    toggle(show);
  }, [show, toggle]);

  return state ? (
    <Wrapper
      {...props}
      theme={theme}
      type={type}
      role="alert"
      css={`
        animation: ${animation};
      `}
    >
      {closable && (
        <Close
          text={closeText}
          theme={theme}
          ariaLabel={closeIconAriaLabel}
          onClick={e => {
            onClose(e);
          }}
        />
      )}
      {children}
    </Wrapper>
  ) : null;
};

Alert.propTypes = {
  /** content to be displayed inside alert */
  children: PropTypes.node.isRequired,
  /** change the colors of the wrapper */
  type: PropTypes.oneOf(['success', 'info', 'danger', 'warning', 'neutral']),
  /** display close button */
  closable: PropTypes.bool,
  /** function when close button is clicked */
  onClose: PropTypes.func,
  /** if you want to display a text instead of the "X" button */
  closeText: PropTypes.string,
  /** aria-label to be in close button */
  closeIconAriaLabel: PropTypes.string,
  /** shows alert if true */
  show: PropTypes.bool,
};

Alert.defaultProps = {
  type: 'neutral',
  closable: undefined,
  onClose: () => {},
  closeText: undefined,
  closeIconAriaLabel: undefined,
  show: undefined,
};

export default Alert;
