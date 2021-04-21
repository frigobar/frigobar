import styled from 'styled-components';

const Grid = styled.main(
  ({ theme: { spacings } }) => `
  display: grid;
  grid-template-areas:
    'header header'
    'navigation content'
    'footer footer';
  grid-template-columns: 200px 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-gap: ${spacings.small}px;

  height: 100%;
`,
);

export { Grid };
