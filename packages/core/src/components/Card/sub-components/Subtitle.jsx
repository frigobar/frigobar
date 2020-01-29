import styled from 'styled-components';

const Subtitle = styled.h3(
  ({
    theme: {
      components: { card },
    },
  }) => `
  font-size: ${card.subtitle.font}rem;
  margin: 0;
`,
);

export default Subtitle;
