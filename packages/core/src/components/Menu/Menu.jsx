import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withFade } from '@frigobar/animation';

import portalContainer from './portalContainer';

const PORTAL_CONTAINER_NAME = 'frigobar-menu';

const List = withFade(
  styled.ul(
    ({
      top,
      left,
      theme: {
        components: { menu },
      },
    }) => `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    z-index: 999;

    margin: 0;
    padding: 0;

    background-color: ${menu.backgroundColor};
    border-radius: ${menu.radius}px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

    list-style: none;
    overflow: hidden;

    li {
      margin: 0;
      padding: 0;
    }
  `,
  ),
);

const Item = styled.a(
  ({
    theme: {
      components: { menu },
    },
  }) => `
  display: block;
  padding:
    ${menu.item.padding.top}px
    ${menu.item.padding.right}px
    ${menu.item.padding.bottom}px
    ${menu.item.padding.left}px;

  color: inherit;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${menu.item.hoverColor};
  }
`,
);

const Menu = ({
  children,
  anchorElement,
  open,
  handleClickAway,
  fadeDuration,
  ...props
}) => {
  const [anchorPosition, setAnchorPosition] = useState({});

  const menuRef = useRef(null);

  const clickAway = useCallback(
    event => {
      if (
        !menuRef.current?.contains(event.target) &&
        !anchorElement.current.contains(event.target)
      ) {
        handleClickAway(event);
      }
    },
    [open],
  );

  useEffect(() => {
    if (open) {
      window.addEventListener('click', clickAway);
    } else {
      window.removeEventListener('click', clickAway);
    }

    return () => {
      window.removeEventListener('click', clickAway);
    };
  }, [clickAway]);

  useEffect(() => {
    const {
      top,
      left,
      height,
    } = anchorElement.current?.getBoundingClientRect();

    setAnchorPosition({ top: top + height - 3, left: left + 3 });
  }, [anchorElement]);

  return createPortal(
    <List
      renderControl={open}
      fadeDuration={fadeDuration}
      fadeIn
      fadeOut
      ref={menuRef}
      top={anchorPosition.top}
      left={anchorPosition.left}
      {...props}
    >
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </List>,
    portalContainer(PORTAL_CONTAINER_NAME),
  );
};

List.displayName = 'Menu';
Item.displayName = 'Menu.Item';

Menu.Item = Item;

Menu.propTypes = {
  anchorElement: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  fadeDuration: PropTypes.number,
  handleClickAway: PropTypes.func,
  open: PropTypes.bool,
};

Menu.defaultProps = {
  fadeDuration: 300,
  handleClickAway: () => {},
  open: false,
};

export default Menu;
