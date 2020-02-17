import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.ul(
  ({ top, left, theme: { colors, radius } }) => `
    position: absolute;
    top: ${top}px;
    left: ${left}px;

    margin: 0;
    padding: 0;

    list-style: none;
    border-radius: ${radius[1]}px;
    background-color: ${colors.white};

    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  `,
);

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Effect = styled.div(
  ({ show }) => css`
    animation: ${show ? fadeIn : fadeOut} 0.3s;
  `,
);
const Item = styled.li``;

const Fade = ({ show, children }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  return (
    shouldRender && (
      <Effect show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </Effect>
    )
  );
};

const Menu = ({ anchorElement, placement, open, handleClickAway, ...props }) => {
  const [anchorPosition, setAnchorPosition] = useState({});

  const menuRef = useRef(null);

  const clickAway = event => {
    if (!menuRef.current?.contains(event.target) && !anchorElement.current.contains(event.target)) {
      handleClickAway(event);
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickAway);

    return () => {
      window.removeEventListener('click', clickAway);
    };
  }, []);

  useEffect(() => {
    const { top, left, height } = anchorElement.current?.getBoundingClientRect();

    setAnchorPosition({ top: top + height, left });
  }, [anchorElement]);

  return createPortal(
    <Fade show={open}>
      <Wrapper ref={menuRef} top={anchorPosition.top} left={anchorPosition.left} {...props}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </Wrapper>
    </Fade>,
    document.body,
  );
};

Menu.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom']),
};

Menu.defaultProps = {
  placement: 'top',
};

export default Menu;
