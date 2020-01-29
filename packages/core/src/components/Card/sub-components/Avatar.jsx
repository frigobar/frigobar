import styled from 'styled-components';

const Avatar = styled.img(
  ({
    rounded,
    theme: {
      radius,
      components: { card },
    },
  }) => `
  border-radius: ${rounded ? `${radius[3]}px` : `${card.avatar.radius}px`};
`,
);

export default Avatar;
