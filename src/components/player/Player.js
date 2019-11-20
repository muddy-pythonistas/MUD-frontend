import React from 'react';
import styled from 'styled-components';

import { playerSprite } from './assets';
import { useStateValue } from '../../hooks/useStateValue';

export const Player = () => {
  const [{ game }, dispatch] = useStateValue();
  return <StyledPlayer {...game} />;
};

const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;

  position: absolute;
  top: ${props => props.y_coord%5 * 128 + 48}px;
  left: ${props => props.x_coord%5 * 128 + 48}px;
`;
