import {
  Avatar,
  Description,
  Info,
  Name,
  Stat,
  StatItem,
  StatLabel,
  StatValue,
  Wrapper,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stat>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatValue>{views}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatValue>{likes}</StatValue>
        </StatItem>
      </Stat>
    </Wrapper>
  );
};
