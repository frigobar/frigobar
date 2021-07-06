import styled from 'styled-components';

const Wrapper = styled.div<{ height?: string }>(
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

Wrapper.defaultProps = {
  height: 'auto',
};

export default Wrapper;
