import React, { useEffect } from 'react';
import styled from 'styled-components';

import { playerSprite } from './assets';
import { useStateValue } from '../../hooks/useStateValue';
import { updateLocalCoords } from '../../actions';

export const Player = props => {
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

  const spriteDirection = props.direction || game.lastMovedDirection;
  let xOffset = '0px';

  switch (spriteDirection) {
    case 'e':
      xOffset = '-32px';
      break;
    case 'w':
      xOffset = '-64px';
      break;
    case 'n':
      xOffset = '-96px';
      break;
    default:
      xOffset = '0px';
  }

  let characterSprite = 'boy';
  if (props.character) characterSprite = props.character.toLowerCase();

  let yOffset = '0px';

  switch (characterSprite) {
    case 'boy':
      yOffset = '0px';
      break;
    case 'girl':
      yOffset = '-32px';
      break;
    default:
      yOffset = '0px';
  }

  return <StyledPlayer {...game} xOffset={xOffset} yOffset={yOffset} />;
};

const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
  background-position-x: ${props => props.xOffset};
  background-position-y: ${props => props.yOffset};
  background-size: 128px 64px;
  width: 32px;
  height: 32px;

  position: absolute;
  left: ${props => (props.local_x % 5) * 128 + 48}px;
  top: ${props => (props.local_y % 5) * 128 + 48}px;

  transition: left 0.2s, top 0.2s;
`;
