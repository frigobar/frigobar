import styled, { css } from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, borders, radius } }) => css`
    overflow-x: auto;

    margin-top: 20px;

    border: ${borders.small}px solid ${colors.neutral[100]};
    border-radius: ${radius[1]}px;
  `,
);
const Table = styled.table`
  width: 100%;

  margin: 0px 0;

  border-collapse: collapse;
`;

const Thead = styled.thead`
  font-family: 'Noto Sans JP', sans-serif;
`;

const Th = styled.th(
  ({ theme: { colors, spacings } }) => css`
    font-size: 1rem;
    font-weight: 500;

    padding: ${spacings.small}px ${spacings.small}px ${spacings.small}px;

    text-align: left;

    border: none;
    background-color: ${colors.neutral[50]};
  `,
);

const Tr = styled.tr`
  transition: background-color 0.3s ease;
`;

const Tbody = styled.tbody(
  ({ theme: { colors } }) => css`
    ${Tr}:hover {
      background-color: ${colors.neutral[100]};
    }
  `,
);

const Td = styled.td(
  ({ theme: { colors } }) => css`
    font-size: 14px;

    padding: 14px 12px 12px;

    border: none;
    border-top: 1px solid ${colors.neutral[100]};

    &:nth-child(n + 3) {
      font-family: 'Fira Code', monospace;

      color: ${colors.primary[500]};
    }

    @media (max-width: 830px) {
      white-space: nowrap;
    }
  `,
);

const List = styled.ul`
  margin-left: 20px;
  padding: 0;

  li {
    line-height: 20px;
  }
`;

const Paragraph = styled.p`
  padding: 0 12px;
`;

export { Wrapper, Table, Thead, Tbody, Th, Tr, Td, List, Paragraph };
