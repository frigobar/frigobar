import styled from 'styled-components';

const Grid = styled.main`
  display: grid;
  grid-template-areas:
    'header header header'
    'navigation content table'
    'footer footer footer';
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 10px;
`;

export { Grid };
