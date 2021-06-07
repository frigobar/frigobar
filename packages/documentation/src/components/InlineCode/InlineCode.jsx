import styled from 'styled-components';

const InlineCode = styled.code(
  ({ theme: { colors, spacings, radius } }) => `
    padding: ${spacings.xxsmall}px;

    background-color: ${colors.neutral[100]};
    border-radius: ${radius[1]}px;
  `,
);

export default InlineCode;
