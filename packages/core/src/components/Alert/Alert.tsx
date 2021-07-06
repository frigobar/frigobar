import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useFade } from '@frigobar/animation';

import CloseIcon from '../../assets/close.svg';

const CloseButton = styled.button<{ withText: boolean }>`
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
  }): string | false =>
    withText &&
    `
      border-radius: none;
      color: ${neutral[700]};
      padding: 0;
      top: 12px;

      &:hover,
      &:focus {
        background-color: transparent;
        color: ${neutral[900]};
      }
    `}
`;

const Wrapper = styled.div<{ type: AlertProps['type'] }>`
  border-radius: 4px;
  font-size: 0.875rem;
  position: relative;
  ${({ theme: { colors, borders, spacings }, type = 'neutral' }): string => `
    background-color: ${colors[type][50]};
    border: ${borders.tiny}px solid ${colors[type][200]};
    color: ${colors.black};
    padding: ${spacings.small}px;
  `}
`;

interface CloseProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  ariaLabel?: string;
}

const Close = ({
  onClick,
  text,
  ariaLabel,
  ...props
}: CloseProps): JSX.Element => (
  <CloseButton
    {...props}
    onClick={onClick}
    withText={Boolean(text)}
    aria-label={text ? undefined : ariaLabel}
  >
    {!text ? (
      <CloseIcon width="10" height="10" aria-hidden="true" />
    ) : (
      <span>{text}</span>
    )}
  </CloseButton>
);

Close.defaultProps = {
  text: undefined,
  ariaLabel: 'close',
};

interface AlertProps {
  /** content to be displayed inside alert */
  children: React.ReactNode;
  /** change the colors of the wrapper */
  type?: 'success' | 'info' | 'danger' | 'warning' | 'neutral';
  /** display close button */
  closable?: boolean;
  /** function when close button is clicked */
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
  /** if you want to display a text instead of the "X" button */
  closeText?: string;
  /** aria-label to be in close button */
  closeIconAriaLabel?: string;
  /** shows alert if true */
  show: boolean;
}

const Alert = ({
  children,
  type = 'neutral',
  closable,
  onClose,
  closeText,
  closeIconAriaLabel,
  show = false,
  ...props
}: AlertProps): JSX.Element | null => {
  const [{ animation, state }, toggle] = useFade({ startOnRender: show });

  useEffect(() => {
    toggle(show);
  }, [show, toggle]);

  return state ? (
    <Wrapper
      {...props}
      type={type}
      role="alert"
      css={`
        animation: ${animation};
      `}
    >
      {closable && (
        <Close
          text={closeText}
          ariaLabel={closeIconAriaLabel}
          onClick={(e): void => {
            onClose && onClose(e);
          }}
        />
      )}
      {children}
    </Wrapper>
  ) : null;
};

export default Alert;
