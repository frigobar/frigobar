import styled from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, borders, radius } }) => `
    border: ${borders.small}px solid ${colors.neutral[100]};
    border-radius: ${radius[1]}px;
    overflow-x: auto;

    margin-top: 20px;
  `,
);
const Table = styled.table`
  border-collapse: collapse;
  margin: 0px 0;
  width: 100%;
`;

const Thead = styled.thead`
  font-family: 'Noto Sans JP', sans-serif;
`;
const Th = styled.th`
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 12px 12px;
  text-align: left;
`;
const Tr = styled.tr``;
const Tbody = styled.tbody`
  ${Tr}:nth-child(odd) {
    background-color: #f6f6f6;
  }
`;
const Td = styled.td(
  ({ theme: { colors } }) => `
    border: none;
    border-top: 1px solid ${colors.neutral[100]};
    padding: 14px 12px 12px;
    font-size: 14px;

    &:nth-child(n+3) {
      font-family: 'Fira Code', monospace;
      color: ${colors.primary[500]};
    }
  `,
);

const List = styled.ul`
  padding: 0;
  margin-left: 20px;

  li {
    line-height: 20px;
  }
`;

export { Wrapper, Table, Thead, Tbody, Th, Tr, Td, List };
