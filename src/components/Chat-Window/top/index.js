import React, { memo } from 'react';
import { useCurrentRoom } from '../../../Context/current-room.context';

export default memo(function Top() {
  const name = useCurrentRoom(v => v.name);
  return <div>{name}</div>;
});
