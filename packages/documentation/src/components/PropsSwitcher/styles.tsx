import styled from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, borders } }) => `
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    height: auto;
    overflow: auto;

    color: ${colors.white};
    background-color: ${colors.info[900]};
    border: ${borders.tiny}px solid ${colors.info[500]};
    border-radius: 4px;

    @media (max-width: 830px) {
      height: calc(100% - 40px);
    }

    table {
      width: 100%;
      border-collapse: collapse;

      tbody {
        tr:nth-child(odd) {
          background-color: rgba(255, 255, 255, 0.05);
        }
      }

      th {
        background-color: transparent;
        text-align: left;
        font-weight: normal;
        font-size: 14px;
        margin-bottom: 12px;
      }

      td {
        font-size: 12px;
      }

      th, td {
        padding: 4px 10px;
      }

      @media (max-width: 830px) {
        th {
          font-size: 12px;
        }

        td {
          font-size: 10px;
        }
      }
    }
  `,
);

const Input = styled.input.attrs({ type: 'text' })``;
const InputNumber = styled.input.attrs({ type: 'number' })``;
const Checkbox = styled.input.attrs({ type: 'checkbox' })``;
const TextArea = styled.textarea``;
const Select = styled.select``;

export { Wrapper, Input, InputNumber, Checkbox, TextArea, Select };
