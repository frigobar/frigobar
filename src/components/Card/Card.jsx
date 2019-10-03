import styled from 'styled-components';
import { Content, Footer, Header, Media } from './sub-components';
import defaultTheme from '../../theme';

const Card = styled.section`
  border-radius: 4px;

  ${({ theme: { colors } }) => `
    box-shadow: 0px 2px 5px 0px ${colors.neutral[200]};
  `}
`;

Card.Content = Content;
Card.Footer = Footer;
Card.Header = Header;
Card.Media = Media;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
