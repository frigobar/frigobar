import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

const Anchor = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${({
    theme: {
      colors: { primary },
    },
  }) => `
    color: ${primary[400]};

    &:hover {
      color: ${primary[200]};
    }
  `}
`;

const Link = ({ children, ...props }) => (
  <Anchor title={children} {...props}>
    {children}
  </Anchor>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}),
};

Link.defaultProps = {
  theme: defaultTheme,
};

export default Link;
