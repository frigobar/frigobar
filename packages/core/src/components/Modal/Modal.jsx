import styled from 'styled-components';

import { Content, Footer, Title, Divider } from './sub-components';
import defaultTheme from '../../theme';

const Modal = styled.section(
  ({ maxWidth, theme: { colors } }) => `
  border-radius: 0px;
  display: inline-block;
  max-width: ${maxWidth};
  box-shadow: 0px 2px 5px 0px ${colors.neutral[200]};
  width: 100%;
`,
);

Modal.Content = Content;
Modal.Footer = Footer;
Modal.Title = Title;
Modal.Divider = Divider;

Modal.defaultProps = {
  theme: defaultTheme,
};

export default Modal;
