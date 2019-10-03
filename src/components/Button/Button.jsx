import PropTypes from 'prop-types';
import styled from 'styled-components';

import skins from './skins';
import defaultTheme from '../../theme';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 6px 14px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  }

  ${({ theme, skin }) => `
    background-color: ${skins(theme)[skin].bgColor};
    color: ${skins(theme)[skin].textColor};
  `}
`;

Button.propTypes = {
  skin: PropTypes.oneOf(['primary', 'info', 'success', 'danger', 'warning', 'neutral']),
};

Button.defaultProps = {
  theme: defaultTheme,
  skin: 'neutral',
};

export default Button;
