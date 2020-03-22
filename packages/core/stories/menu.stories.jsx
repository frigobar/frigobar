import React, { useState, useRef } from 'react';

import { Menu, Button } from '../src/components';

export default {
  title: 'Menu',
  component: Menu,
};

export const Default = () => {
  const buttonRef = useRef(null);
  const [open, toggleOpen] = useState(false);

  return (
    <div>
      <Menu
        anchorElement={buttonRef}
        open={open}
        handleClickAway={() => {
          toggleOpen(false);
        }}
      >
        <Menu.Item href="#">Item 1</Menu.Item>
        <Menu.Item href="#">Item 2</Menu.Item>
      </Menu>
      <Button ref={buttonRef} onClick={() => toggleOpen(true)}>
        Open menu
      </Button>
    </div>
  );
};
