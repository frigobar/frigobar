import React from 'react';

function Header(props) {
  return (
    <header
      css={`
        grid-area: header;
      `}
      {...props}
    />
  );
}

export default Header;
