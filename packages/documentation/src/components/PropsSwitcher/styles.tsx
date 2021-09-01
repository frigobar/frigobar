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

const Input = styled.input.attrs({ type: 'text' })``;
const InputNumber = styled.input.attrs({ type: 'number' })``;
const Checkbox = styled.input.attrs({ type: 'checkbox' })``;
const TextArea = styled.textarea``;
const Select = styled.select``;

export { Wrapper, Input, InputNumber, Checkbox, TextArea, Select };
