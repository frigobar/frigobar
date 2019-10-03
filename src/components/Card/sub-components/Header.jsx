import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 16px 16px 8px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 0.875rem;
  margin: 0;
`;

const Header = ({ title, subtitle, ...props }) => (
  <Wrapper {...props}>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: undefined,
};

Header.displayName = 'Card.Header';

export default Header;
