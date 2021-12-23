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
  open,
}: {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}): JSX.Element | null {
  const [{ animation, state }, toggleFade] = useFade({ startOnRender: open });
  const dialogRef = useRef<HTMLElement>(null);
  portalContainer(PORTAL_CONTAINER_NAME);

  const handleKeyDown = useFocusTrap(dialogRef, [state]);

  function handleClickOutside() {
    console.log('clicked');
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
        <Backdrop animation={animation} onKeyDown={handleKeyDown}>
          <Dialog ref={dialogRef}>
            <CloseButton onClick={onClose}>
              <X />
            </CloseButton>
            {children}
          </Dialog>
        </Backdrop>,
        document.querySelector(`#${PORTAL_CONTAINER_NAME}`) || document.body,
      )
    : null;
}

export default Modal;
