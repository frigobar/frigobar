import styled from 'styled-components';
import defaultTheme from '../../theme';

const Card = styled.section`
  border-radius: 4px;
  padding: 16px;

  ${({ theme: { colors } }) => `
    border: 1px solid ${colors.neutral[200]};
  `}
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
