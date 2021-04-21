import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Content,
  Footer,
  Header,
  Media,
  Avatar,
  Title,
  Subtitle,
} from './sub-components';
import defaultTheme from '../../theme';

const Card = styled.section(
  ({
    maxWidth,
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
);

Card.Content = Content;
Card.Footer = Footer;
Card.Header = Header;
Card.Media = Media;
Card.Avatar = Avatar;
Card.Title = Title;
Card.Subtitle = Subtitle;

Card.displayName = 'Card';

Card.propTypes = {
  maxWidth: PropTypes.string,
};

Card.defaultProps = {
  maxWidth: '400px',
  theme: defaultTheme,
};

export default Card;
