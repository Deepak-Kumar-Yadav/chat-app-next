import React from 'react';
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react';
import { useCurrentRoom } from '../../../Context/current-room.context';
import { useHover } from '../../../misc/custom.hooks';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import IconBtnControl from './IconBtnControl';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

export default function MessageItem({ message, handleAdmin }) {
  const [selfRef, isHovered] = useHover();

  const { author, createdAt, text } = message;
  const isAdmin = useCurrentRoom(v => v.isAdmin);
  const admins = useCurrentRoom(v => v.admins);

  const isMsgAuthorAdmin = admins.includes(author.uid);
  const isAuthor = auth.currentUser.uid === author.uid;
  const canGrantAdmin = isAdmin && !isAuthor;

  return (
    <li
      className={`padded mb-1 cursor-pointer ${isHovered ? 'bg-black-02' : ''}`}
      ref={selfRef}
    >
      <div className="d-flex align-item-center font-border mb-1">
        <PresenceDot uid={author.uid} />
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />
        <ProfileInfoBtnModal
          profile={author}
          appearance="link"
          className="p-0 ml-1 text-black"
        >
          {canGrantAdmin}
          <Button block onClick={() => handleAdmin(author.uid)} color="blue">
            {isMsgAuthorAdmin
              ? 'Remove admin permission'
              : 'Give admin permission'}
          </Button>
        </ProfileInfoBtnModal>
        <TimeAgo
          datetime={createdAt}
          className="font-normal text-black-45 ml-2"
        />
        <IconBtnControl
          {...(true ? { color: 'red' } : {})}
          isVisible
          iconName="heart"
          tooltip="Like the message"
          onClick={() => {}}
          badgeContent={5}
        />
      </div>
      <div>
        <span className="word-barel-all">{text}</span>
      </div>
    </li>
  );
}
