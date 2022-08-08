import React from 'react';
import { useParams } from 'react-router';
import { Loader } from 'rsuite';
import Bottom from '../../components/Chat-Window/bottom';
import Messages from '../../components/Chat-Window/messages';
import Top from '../../components/Chat-Window/top';
import { CurrentRoomProvider } from '../../Context/current-room.context';
import { useRooms } from '../../Context/Rooms.context';
import { auth } from '../../misc/firebase';
import { tranformToArr } from '../../misc/helpers';

export default function Chat() {
  const { chatId } = useParams();
  const rooms = useRooms();
  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }
  const currentRoom = rooms.find(room => room.id === chatId);
  if (!currentRoom) {
    return <h6 className="text-center mt-page">Chat {chatId} not found</h6>;
  }

  const admins = tranformToArr(currentRoom.admins);
  const isAdmin = admins.includes(auth.currentUser.uid);
  const { name, description } = currentRoom;
  const currentRoomData = {
    name,
    description,
    admins,
    isAdmin,
  };

  return (
    <CurrentRoomProvider data={currentRoomData}>
      <div className="chat-top">
        <Top />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <Bottom />
      </div>
    </CurrentRoomProvider>
  );
}
