import React from 'react';
import styled from 'styled-components';

import { playerSprite } from './assets';
import { useStateValue } from '../../hooks/useStateValue';

export const Player = props => {
  const [{ game }] = useStateValue();

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

  const characterSprite = props.character || 'boy';
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
