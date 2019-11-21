import React, { useEffect } from 'react';
import styled from 'styled-components';

import { playerSprite } from './assets';
import { useStateValue } from '../../hooks/useStateValue';
import { updateLocalCoords } from '../../actions';

export const Player = () => {
  const [{ game, map }, dispatch] = useStateValue();
  useEffect(() => {
    const currentRoom = map.rooms.find(r => r.id === game.curr_room);
    if (currentRoom) {
      updateLocalCoords(dispatch, {
        x_coord: currentRoom.x_coord,
        y_coord: currentRoom.y_coord
      });
    }
  }, [game.curr_room]);

  return <StyledPlayer {...game} />;
};

const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;

  position: absolute;
  left: ${props => (props.local_x % 5) * 128 + 48}px;
  top: ${props => (props.local_y % 5) * 128 + 48}px;

  transition: 0.2s;
`;
