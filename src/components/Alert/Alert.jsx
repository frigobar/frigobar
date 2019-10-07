import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../theme';

const Wrapper = styled.div`
  border-radius: 4px;
  padding: 10px;
  ${({ theme, type }) => `
    background-color: ${theme.colors[type][50]};
    border: 1px solid ${theme.colors[type][500]};
    color: ${theme.colors[type][500]};
  `}
`;

const Alert = ({ message, type, ...props }) => (
  <Wrapper type={type} {...props}>
    {message}
  </Wrapper>
);

Alert.propTypes = {
  message: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'danger', 'warning', 'neutral']),
  theme: PropTypes.shape({}),
};

Alert.defaultProps = {
  type: 'neutral',
  theme: defaultTheme,
};

export default Alert;
