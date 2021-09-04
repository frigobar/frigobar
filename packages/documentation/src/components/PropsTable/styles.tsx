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

const Th = styled.th(
  ({ theme: { colors, spacings } }) => `
  padding: ${spacings.small}px ${spacings.small}px ${spacings.small}px;

  background-color: ${colors.neutral[50]};
  border: none;

  font-size: 1rem;
  font-weight: 500;
  text-align: left;
`,
);

const Tr = styled.tr`
  transition: background-color 0.3s ease;
`;

const Tbody = styled.tbody(
  ({ theme: { colors } }) => `
  ${Tr}:hover {
    background-color: ${colors.neutral[100]};
  }
`,
);

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

    @media (max-width: 830px) {
      white-space: nowrap;
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

const Paragraph = styled.p`
  padding: 0 12px;
`;

export { Wrapper, Table, Thead, Tbody, Th, Tr, Td, List, Paragraph };
