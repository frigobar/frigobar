import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { useFade } from '@frigobar/animation';

import portalContainer from '../Menu/portalContainer';
import useFocusTrap from '../../utils/useFocusTrap';

import { Backdrop, Dialog, CloseButton } from './styles';

const PORTAL_CONTAINER_NAME = 'frigobar-modal';

function Modal({
  children,
  onClose,
  onClickOutside,
  open,
}: {
  children: React.ReactNode;
  onClose: () => void;
  onClickOutside: () => void;
  open: boolean;
}): JSX.Element | null {
  const [{ animation, state }, toggleFade] = useFade({ startOnRender: open });
  const dialogRef = useRef<HTMLElement>(null);
  portalContainer(PORTAL_CONTAINER_NAME);

  const handleKeyDown = useFocusTrap(dialogRef, [state]);

  function handleClickOutside(event: MouseEvent) {
    if (!dialogRef.current?.contains(event.target as Node)) {
      onClose && onClose();
      onClickOutside && onClickOutside();
    }
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    toggleFade(open);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [open]);

  return state
    ? createPortal(
        <Backdrop
          animation={animation}
          onKeyDown={handleKeyDown}
          onAnimationEnd={() => console.log('end')}
        >
          <Dialog ref={dialogRef}>
            <CloseButton onClick={onClose}>
              <X width={24} height={24} />
            </CloseButton>
            {children}
          </Dialog>
        </Backdrop>,
        document.querySelector(`#${PORTAL_CONTAINER_NAME}`) || document.body,
      )
    : null;
}

export default Modal;
