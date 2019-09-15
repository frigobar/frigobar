import styled from 'styled-components';
import defaultTheme from '../../theme';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 14px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  }

  ${({ theme, skin }) => `
    background-color: ${theme.button[skin].bgColor}
    color: ${theme.button[skin].textColor}
  `}
`;

Button.defaultProps = {
  theme: defaultTheme,
  skin: 'neutral',
};

export default Button;
