import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useFade } from '@frigobar/animation';

const CloseIcon = ({ ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 47.971 47.971"
    {...props}
  >
    <g>
      <path
        d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
      />
    </g>
  </svg>
);

const CloseButton = styled.button<{ withText: boolean }>(
  ({
    withText,
    theme: {
      colors: { neutral },
    },
  }) => css`
    position: absolute;
    top: 12px;
    right: 12px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding: 5px;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    border: 0;
    border-radius: 50%;
    background-color: transparent;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.1);
    }

    ${withText
      ? css`
          top: 12px;

          padding: 0;

          color: ${neutral[700]};

          border-radius: none;

          &:hover,
          &:focus {
            color: ${neutral[900]};
            background-color: transparent;
          }
        `
      : ''}
  `,
);

const Wrapper = styled.div<{
  type: AlertProps['type'];
  closable: AlertProps['closable'];
}>(
  ({ theme: { colors, borders, spacings }, type = 'neutral', closable }) => css`
    font-size: 0.875rem;

    position: relative;

    padding: ${spacings.small}px;
    padding-right: ${closable ? spacings.xxlarge : spacings.small}px;

    color: ${colors.neutral[900]};
    border: ${borders.tiny}px solid ${colors[type][200]};
    border-radius: 4px;
    background-color: ${colors[type][50]};
  `,
);

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
    {!text ? <CloseIcon width="10" height="10" /> : <span>{text}</span>}
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
      animation={animation}
      closable={closable}
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
