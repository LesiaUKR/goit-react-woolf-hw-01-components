import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  border-radius: 4px;
  border: 1px solid lightskyblue;
  width: 350px;
  background-color: white;
`;

export const Description = styled.div`
  text-align: center;
  padding: 32px;
  border: 1px solid lightskyblue;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid lightskyblue;
`;

export const Name = styled.div`
  color: midnightblue;
  margin-top: 16px;
  font-weight: bold;
  font-size: 24px;
`;

export const Info = styled.div`
  margin-top: 12px;
  font-size: 18px;
  color: skyblue;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Stat = styled.ul`
  display: flex;
  align-items: center;
  height: 150px;
  background-color: lightskyblue;
`;

export const StatItem = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;
  border: 1px solid lightskyblue;
`;

export const StatLabel = styled.p`
  margin-top: 16px;
  margin-bottom: 4px;
  color: white;
`;

export const StatValue = styled.p`
  color: whitesmoke;
  font-weight: bold;
  margin-bottom: 16px;
`;
