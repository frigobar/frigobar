import React from 'react';
import styled from 'styled-components';
import Header from './sub-components';
import { Avatar, Content, Footer, Subtitle, Title, Media } from './styles';

interface CardProps {
  /** sets max-width of the card wrapper */
  maxWidth: string;
  children: React.ReactNode;
}

const Wrapper = styled.section<CardProps>(
  ({ maxWidth = '400px', theme: { colors, radius } }) => `
    display: inline-block;
    max-width: ${maxWidth};
    width: 100%;

    border-radius: ${radius[1]}px;
    
    background-color: ${colors.white};
    box-shadow: 0px 2px 5px 0px ${colors.neutral[200]};
  `,
);

const Card = (props: CardProps): JSX.Element => <Wrapper {...props} />;

Card.Content = Content;
Card.Footer = Footer;
Card.Header = Header;
Card.Media = Media;
Card.Avatar = Avatar;
Card.Title = Title;
Card.Subtitle = Subtitle;

Card.displayName = 'Card';

export default Card;
