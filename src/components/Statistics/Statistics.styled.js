import styled from 'styled-components';
import { Wave } from 'react-animated-text';

const StyledTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  padding: 32px 0;
  color: midnightblue;
`;

export const Title = ({ title }) => (
  <StyledTitle>
    <Wave text={`${title}`} effect="fadeOut" effectChange={1.0} />
  </StyledTitle>
);
export const StatsSection = styled.section`
  margin: 60px auto;
  padding: 20px;
  border: 1px solid lightskyblue;
  border-radius: 4px;
  background-color: lightskyblue;
  width: 500px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px;
  background-color: white;
  border-radius: 4px;
`;

export const StatsItem = styled.li`
  text-align: center;
  flex-basis: ${({ $count }) => `calc(100% / ${$count})`};
  background-color: ${getRandomHexColor};
  border: 1px solid midnightblue;
  border-radius: 4px;
`;

export const StatsLabel = styled.p`
  margin-top: 18px;
  margin-bottom: 9px;
  font-size: 20px;
  font-weight: bold;
  color: midnightblue;
`;

export const StatsValue = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: bold;
  color: midnightblue;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
