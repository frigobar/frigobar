import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';

import portalContainer from '../Menu/portalContainer';
import useFocusTrap from '../../utils/useFocusTrap';

import { Backdrop, Dialog, Header, Body, Title, CloseButton } from './styles';

const PORTAL_CONTAINER_NAME = 'frigobar-modal';

function Modal({
  children,
  title,
  onClose,
  onClickOutside,
  closeOnClickOutside = true,
  minHeight = '200px',
  minWidth = '200px',
  ...rest
}: {
  children: React.ReactNode;
  onClose: () => void;
  onClickOutside: () => void;
  closeOnClickOutside: boolean;
  title?: React.ReactNode;
  minHeight?: string;
  minWidth?: string;
}): JSX.Element | null {
  const [stickedHeader, setStickedHeader] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<Element | null>(null);
  const handleKeyDown = useFocusTrap(dialogRef);

  portalContainer(PORTAL_CONTAINER_NAME);

  if (typeof window !== 'undefined' && !previousActiveElementRef.current) {
    previousActiveElementRef.current = document.activeElement;
  }

  function handleClickOutside(event: MouseEvent) {
    if (!dialogRef.current?.contains(event.target as Node)) {
      closeOnClickOutside && onClose && onClose();
      onClickOutside && onClickOutside();
    }
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    const stickyObserver = new IntersectionObserver(
      ([e]) => setStickedHeader(e.intersectionRatio < 1),
      { threshold: [1] },
    );

    headerRef.current && stickyObserver.observe(headerRef.current);

    return () => {
      (previousActiveElementRef.current as HTMLElement)?.focus();
      window.removeEventListener('click', handleClickOutside);
      headerRef.current && stickyObserver.unobserve(headerRef.current);
    };
  }, []);

  return createPortal(
    <Backdrop onKeyDown={handleKeyDown} {...rest}>
      <Dialog
        ref={dialogRef}
        minHeight={minHeight}
        minWidth={minWidth}
        role="dialog"
      >
        {title && (
          <Header ref={headerRef} sticked={stickedHeader}>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>
              <X width={24} height={24} />
            </CloseButton>
          </Header>
        )}
        <Body>{children}</Body>
      </Dialog>
    </Backdrop>,
    document.querySelector(`#${PORTAL_CONTAINER_NAME}`) || document.body,
  );
}

export default Modal;
