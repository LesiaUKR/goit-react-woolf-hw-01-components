import styled from 'styled-components';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ $isonline }) => ($isonline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 700;
`;
