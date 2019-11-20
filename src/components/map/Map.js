import React from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';

import { tileSprites } from './assets/floortiles';

export const Map = ({ rooms }) => {
  // TODO Fix rendering of floor sprites
  // const sprite = tileSprites[Math.floor(Math.random() * tileSprites.length)];
  const sprite = tileSprites[0];
  return (
    <StyledMap>
      {rooms.map(tile => (
        <Tile sprite={sprite} {...tile} />
      ))}
    </StyledMap>
  );
};

const StyledMap = styled.div`
  width: 600px;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;
