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
        handleClickAway={() => toggleOpen(false)}
        fadeDuration={1000}
      >
        Menu
      </Menu>
      <Button ref={buttonRef} onClick={() => toggleOpen(!open)}>
        Billton
      </Button>
    </div>
  );
};
