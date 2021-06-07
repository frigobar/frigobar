import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div(
  ({
    theme: {
      components: { card },
    },
  }) => `
  margin-top: ${card.media.margin.top}px;
  margin-bottom: ${card.media.margin.bottom}px;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
`,
);
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
  /** an image url to display the media */
  src: PropTypes.string.isRequired,
};

Media.displayName = 'Card.Media';

export default Media;
