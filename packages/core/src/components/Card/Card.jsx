import styled from 'styled-components';
import { Content, Footer, Header, Media, Avatar, Title, Subtitle } from './sub-components';
import defaultTheme from '../../theme';

const Card = styled.section`
  border-radius: 4px;
  display: inline-block;
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ theme: { colors } }) => `
    box-shadow: 0px 2px 5px 0px ${colors.neutral[200]};
  `};
  width: 100%;
`;

Card.Content = Content;
Card.Footer = Footer;
Card.Header = Header;
Card.Media = Media;
Card.Avatar = Avatar;
Card.Title = Title;
Card.Subtitle = Subtitle;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
