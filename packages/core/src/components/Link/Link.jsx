import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

const Link = styled.a`
  text-decoration: none;

  ${({
    theme: {
      colors: { primary },
    },
  }) => `
    color: ${primary[400]};

    &:hover {
      color: ${primary[200]};
    }
  `}
`;

Link.propTypes = {
  theme: PropTypes.shape({}),
};

Link.defaultProps = {
  theme: defaultTheme,
};

export default Link;
