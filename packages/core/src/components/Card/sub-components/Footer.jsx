import styled from 'styled-components';
import PropTypes from 'prop-types';

const alignDictionary = {
  left: 'flex-start',
  right: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
};

const Footer = styled.footer(
  ({
    align,
    theme: {
      components: { card },
    },
  }) => `
  display: flex;
  padding:
    ${card.footer.padding.top}px
    ${card.footer.padding.right}px
    ${card.footer.padding.bottom}px
    ${card.footer.padding.left}px;

  justify-content: ${alignDictionary[align]};
`,
);

Footer.displayName = 'Card.Footer';

Footer.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'space-between', 'space-around']),
};

Footer.defaultProps = {
  align: 'left',
};

export default Footer;
