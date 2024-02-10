import {
  StatsItem,
  StatsLabel,
  StatsList,
  StatsSection,
  StatsValue,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, items }) => {
  return (
    <StatsSection>
      {title && <Title title={title}>{title}</Title>}
      {/* <Wave1></Wave1> */}
      <StatsList>
        {items.map(({ id, label, percentage }) => (
          <StatsItem key={id} $count={items.length}>
            <StatsLabel>{label}</StatsLabel>
            <StatsValue>{percentage}%</StatsValue>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};
