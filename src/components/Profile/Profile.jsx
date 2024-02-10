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
import { FcLike } from 'react-icons/fc';
import { IoEye } from 'react-icons/io5';
import { GiShadowFollower } from 'react-icons/gi';
import { IconContext } from 'react-icons';

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
          <StatLabel>
            <IconContext.Provider value={{ color: 'purple', size: '24px' }}>
              <GiShadowFollower />
            </IconContext.Provider>
          </StatLabel>
          <StatValue>{followers}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>
            <IconContext.Provider value={{ color: 'blue', size: '24px' }}>
              <IoEye />
            </IconContext.Provider>
          </StatLabel>
          <StatValue>{views}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>
            <IconContext.Provider value={{ size: '24px' }}>
              <FcLike />
            </IconContext.Provider>
          </StatLabel>
          <StatValue>{likes}</StatValue>
        </StatItem>
      </Stat>
    </Wrapper>
  );
};
