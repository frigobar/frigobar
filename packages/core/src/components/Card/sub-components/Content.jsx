import styled from 'styled-components';

const Content = styled.div(
  ({
    theme: {
      components: { card },
    },
  }) => `
  padding:
    ${card.content.padding.top}px
    ${card.content.padding.right}px
    ${card.content.padding.bottom}px
    ${card.content.padding.left}px;
`,
);

Content.displayName = 'Card.Content';

export default Content;
