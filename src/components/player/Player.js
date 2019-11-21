import React from 'react';
import styled from 'styled-components';

import { playerSprite } from './assets';
import { useStateValue } from '../../hooks/useStateValue';

export const Player = () => {
  const [{ game }, dispatch] = useStateValue();
  let positions = {
      s: '0px',
      n: '-96px',
      e: '-32px',
      w: '-64px'
  }
  return <StyledPlayer {...game} position={positions[game.direction]} />;
};

const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
  background-position: ${props => `${props.position} 0%`}
  width: 32px;
  height: 32px;

  position: absolute;
  top: ${props => props.y_coord%5 * 128 + 48}px;
  left: ${props => props.x_coord%5 * 128 + 48}px;
`;
