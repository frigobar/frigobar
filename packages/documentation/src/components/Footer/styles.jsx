import styled from 'styled-components';

const Wrapper = styled.footer(
  ({ theme: { spacings } }) => `
  grid-area: footer;

  padding-right: ${spacings.small}px;
  padding-bottom: ${spacings.large}px;
  padding-left: ${spacings.small}px;

  text-align: center;
`,
);

export default Wrapper;
