import styled from 'styled-components';
import { defaultTheme as theme } from '../../theme';

import skins from './skins';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 14px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.6);
  }

  ${({ theme, skin }) => `
    background-color: ${skins(theme)[skin].bgColor};
    color: ${skins(theme)[skin].textColor};
  `}
`;

Button.defaultProps = {
  theme,
  skin: 'neutral',
};

export default Button;
