import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
`;

export default Avatar;
