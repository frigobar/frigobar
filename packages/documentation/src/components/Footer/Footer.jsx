import React from 'react';

function Footer(props) {
  return (
    <footer
      css={`
        grid-area: footer;
      `}
      {...props}
    />
  );
}

export default Footer;
