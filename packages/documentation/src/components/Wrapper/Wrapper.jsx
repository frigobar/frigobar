import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div(
  ({ height }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;
    height: ${height};

    p {
      margin: 4px;
    }
  `,
);

Wrapper.propTypes = {
  height: PropTypes.string,
};

Wrapper.defaultProps = {
  height: 'auto',
};

export default Wrapper;
