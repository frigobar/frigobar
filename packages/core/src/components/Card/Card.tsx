import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import {
  Content,
  Footer,
  Header,
  Media,
  Avatar,
  Title,
  Subtitle,
} from './sub-components';

interface CardProps {
  /** sets max-width of the card wrapper */
  maxWidth: string;
}

interface CardOverload extends StyledComponentBase<'section', DefaultTheme> {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
  Media: typeof Media;
  Avatar: typeof Avatar;
  Title: typeof Title;
  Subtitle: typeof Subtitle;
}

const Card: CardOverload = Object.assign(
  styled.section<CardProps>(
    ({
      maxWidth = '400px',
      theme: {
        colors,
        components: { card },
      },
    }) => `
  display: inline-block;
  max-width: ${maxWidth};
  width: 100%;

  border-radius: ${card.border.radius}px;
  
  background-color: ${colors.white};
  box-shadow: 0px 2px 5px 0px ${colors.neutral[200]};
`,
  ),
  { Content, Footer, Header, Media, Avatar, Title, Subtitle },
);

Card.displayName = 'Card';

export default Card;
