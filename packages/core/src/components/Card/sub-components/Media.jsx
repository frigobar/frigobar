import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Media = ({ src, ...props }) => (
  <Wrapper {...props}>
    <Image src={src} />
  </Wrapper>
);

Media.propTypes = {
  src: PropTypes.string.isRequired,
};

Media.displayName = 'Card.Media';

export default Media;
