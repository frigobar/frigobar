import React from 'react';
import styled from 'styled-components';
import { defaultTheme as theme } from '../../theme'

const Card = styled.section`
  border-radius: 4px;
  padding: 16px;

  ${({ theme: { colors } }) => `
    border: 1px solid ${colors.neutral[200]};
  `}
`;

Card.defaultProps = {
  theme,
};

export default Card;
