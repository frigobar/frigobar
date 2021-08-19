import styled from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, borders } }) => `
    position: absolute;
    width: 48%;
    left: 0;
    bottom: 20px;
    transform: translateX(2%);
    padding: 8px;

    background-color: white;
    border: ${borders.small}px solid ${colors.neutral[100]};
    border-radius: 4px;

    table {
      width: 100%;

      th {
        text-align: left;
      }
    }
  `,
);

export { Wrapper };
