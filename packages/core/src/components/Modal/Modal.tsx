import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';

import portalContainer from '../Menu/portalContainer';
import useFocusTrap from '../../utils/useFocusTrap';

import { Backdrop, Dialog, CloseButton } from './styles';

const PORTAL_CONTAINER_NAME = 'frigobar-modal';

function Modal({
  children,
  onClose,
  onClickOutside,
  closeOnClickOutside = true,
  minHeight = '200px',
  ...rest
}: {
  children: React.ReactNode;
  onClose: () => void;
  onClickOutside: () => void;
  closeOnClickOutside: boolean;
  minHeight?: string;
}): JSX.Element | null {
  const dialogRef = useRef<HTMLElement>(null);
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

    return () => {
      (previousActiveElementRef.current as HTMLElement)?.focus();
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return createPortal(
    <Backdrop onKeyDown={handleKeyDown} {...rest}>
      <Dialog ref={dialogRef} minHeight={minHeight}>
        <CloseButton onClick={onClose}>
          <X width={24} height={24} />
        </CloseButton>
        {children}
      </Dialog>
    </Backdrop>,
    document.querySelector(`#${PORTAL_CONTAINER_NAME}`) || document.body,
  );
}

export default Modal;
