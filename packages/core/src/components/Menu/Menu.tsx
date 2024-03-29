import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { useFade } from '@frigobar/animation';

import portalContainer from './portalContainer';

const PORTAL_CONTAINER_NAME = 'frigobar-menu';

const List = styled.ul<{ top: number; left: number }>(
  ({ top, left, theme: { colors, radius } }) => css`
    position: fixed;
    z-index: 999;
    top: ${top}px;
    left: ${left}px;

    overflow: hidden;

    margin: 0;
    padding: 0;

    list-style: none;

    border-radius: ${radius[1]}px;
    background-color: ${colors.neutral[50]};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 0;
    }
  `,
);

const Item = styled.a(
  ({ theme: { spacings, colors } }) => css`
    display: block;

    padding: ${spacings.xsmall}px;

    cursor: pointer;

    text-decoration: none;

    color: ${colors.neutral[900]};

    &:hover {
      background-color: ${colors.primary[100]};
    }
  `,
);

interface MenuProps {
  children: React.ReactNode;
  /** a react component ref to be the anchor of the menu items */
  anchorElement: React.RefObject<HTMLElement>;
  /** whether the menu is visible or not */
  open: boolean;
  /** function called when user clicks outside the menu */
  handleClickAway?: (event: MouseEvent) => void;
  /** duration of the fade in/out animation */
  fadeDuration?: number;
}

const Menu = ({
  children,
  anchorElement,
  open,
  handleClickAway = () => null,
  fadeDuration,
  ...props
}: MenuProps): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [{ animation, state }, toggleFade] = useFade({
    startOnRender: false,
    duration: fadeDuration,
  });

  const safeHandleClickAway = useCallback(event => handleClickAway(event), [
    handleClickAway,
  ]);

  const menuRef = useRef<HTMLUListElement>(null);

  const clickAway = useCallback(
    event => {
      if (
        !menuRef.current?.contains(event.target) &&
        anchorElement.current &&
        !anchorElement.current.contains(event.target)
      ) {
        safeHandleClickAway(event);
      }
    },
    [anchorElement, safeHandleClickAway],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    toggleFade(open);
  }, [open, toggleFade]);

  useEffect(() => {
    if (open) {
      window.addEventListener('click', clickAway);
    } else {
      window.removeEventListener('click', clickAway);
    }

    return () => {
      window.removeEventListener('click', clickAway);
    };
  }, [clickAway, open]);

  useEffect(() => {
    if (anchorElement.current) {
      if (open) {
        const {
          top,
          left,
          height,
        } = anchorElement.current?.getBoundingClientRect();

        setAnchorPosition({ top: top + height - 3, left: left + 3 });
      }
    }
  }, [anchorElement, open]);

  if (mounted) {
    portalContainer(PORTAL_CONTAINER_NAME);
  }

  return mounted
    ? createPortal(
        state ? (
          <div>
            <List
              animation={animation}
              ref={menuRef}
              top={anchorPosition.top}
              left={anchorPosition.left}
              {...props}
            >
              {React.Children.map(children, child => (
                <li>{child}</li>
              ))}
            </List>
          </div>
        ) : null,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('#frigobar-menu')!,
      )
    : null;
};

List.displayName = 'Menu';
Item.displayName = 'Menu.Item';

Menu.Item = Item;

Menu.defaultProps = {
  fadeDuration: 300,
  open: false,
};

export default Menu;
