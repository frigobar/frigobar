import styled from 'styled-components';

const Title = styled.h2(
  ({
    theme: {
      components: { card },
    },
  }) => `
  font-size: ${card.title.font.size}rem;
  margin: 0;
`,
);

export default Title;
