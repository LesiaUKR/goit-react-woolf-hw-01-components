import { Avatar, Name, Status } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status $isonline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};
