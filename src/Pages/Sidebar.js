import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';
import DashboardToggle from '../components/Dashboard/DashboardToggle';
import ChatRoomList from '../components/Rooms/ChatRoomList';

export default function Sidebar() {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);

  return (
    <div className="h-100">
      <div className="pt-2" ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider style={{ margin: 0, padding: '30px 0' }}>
          Join Conversation
        </Divider>
      </div>
      <ChatRoomList aboveElmHeight={height} />
    </div>
  );
}
