import React from 'react';
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

export interface MediaProps {
  /** an image url to display the media */
  src: string;
}

const Media = ({ src, ...props }: MediaProps): JSX.Element => (
  <Wrapper {...props}>
    <Image src={src} />
  </Wrapper>
);

Media.displayName = 'Card.Media';

export default Media;
