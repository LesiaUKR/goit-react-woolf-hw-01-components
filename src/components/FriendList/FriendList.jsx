import { FriendItem } from './FriendItem/FriendItem';
import { FriendWrapper, FriendWrapperItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendWrapperItem key={id}>
          <FriendItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendItem>
        </FriendWrapperItem>
      ))}
    </FriendWrapper>
  );
};
