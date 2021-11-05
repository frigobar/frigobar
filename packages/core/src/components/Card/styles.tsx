import React from 'react';
import styled, { css } from 'styled-components';

const Avatar = styled.img<{
  rounded?: boolean;
}>(
  ({ rounded, theme: { radius } }) => css`
    border-radius: ${rounded ? `${radius[3]}px` : `${radius[1]}px`};
  `,
);

const Content = styled.div(
  ({ theme: { spacings } }) => css`
    padding: ${spacings.xsmall}px ${spacings.medium}px ${spacings.xsmall}px
      ${spacings.medium}px;
  `,
);

const alignDictionary = {
  left: 'flex-start',
  right: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
};

const Footer = styled.footer<{
  align?: 'left' | 'right' | 'space-between' | 'space-around';
}>(
  ({ align = 'left', theme: { spacings } }) => css`
    display: flex;
    justify-content: ${alignDictionary[align]};

    padding: ${spacings.xsmall}px ${spacings.medium}px ${spacings.medium}px
      ${spacings.medium}px;
  `,
);

const Subtitle = styled.h3`
  font-size: 1rem;

  margin: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;

  margin: 0;
`;

const Wrapper = styled.div(
  ({ theme: { spacings } }) => css`
    position: relative;

    overflow: hidden;

    margin-top: ${spacings.xsmall}px;
    margin-bottom: ${spacings.xsmall}px;
    padding-bottom: 56.25%;
  `,
);

const Image = styled.img`
  position: absolute;
  top: 50%;

  width: 100%;

  transform: translateY(-50%);
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

Avatar.displayName = 'Card.Avatar';
Content.displayName = 'Card.Content';
Footer.displayName = 'Card.Footer';
Subtitle.displayName = 'Card.Subtitle';
Title.displayName = 'Card.Title';
Media.displayName = 'Card.Media';

export { Avatar, Content, Footer, Subtitle, Title, Media };
