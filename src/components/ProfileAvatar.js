import React from 'react';
import { Avatar } from 'rsuite';
import { getNameInitials } from '../misc/helpers';

export default function ProfileAvatar({ name, ...avatarprops }) {
  return (
    <Avatar circle {...avatarprops}>
      {getNameInitials(name)}
    </Avatar>
  );
}
