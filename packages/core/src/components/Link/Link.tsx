import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;

  ${({
    theme: {
      colors: { primary },
    },
  }) => `
    color: ${primary[400]};

    &:hover {
      color: ${primary[200]};
    }
  `}
`;

export default Link;
