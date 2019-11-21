import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';

import { tileSprites } from './assets/floortiles';
import { tsLiteralType } from '@babel/types';

export const Map = ({ rooms, x, y }) => {
  const [coords, setCoords] = useState({
    x_min: 0,
    x_max: 4,
    y_min: 0,
    y_max: 4
  });
  const [visibleRooms, setVisibleRooms] = useState([]);
  // TODO Fix rendering of floor sprites
  // const sprite = tileSprites[Math.floor(Math.random() * tileSprites.length)];
  const sprite = tileSprites[0];

  useEffect(() => {
    let x_min = Math.floor(x / 5) * 5;
    let y_min = Math.floor(y / 5) * 5;
    if (x_min !== coords.x_min || y_min !== coords.y_min) {
      setCoords({ x_min, x_max: x_min + 4, y_min, y_max: y_min + 4 });
    }
  }, [x, y, coords.x_min, coords.y_min]);

  useEffect(() => {
    let filtered = rooms.filter(room => {
      if (room.x_coord >= coords.x_min && room.x_coord <= coords.x_max) {
        if (room.y_coord >= coords.y_min && room.y_coord <= coords.y_max) {
          return room;
        }
      }
    });

    setVisibleRooms(filtered);
  }, [coords, rooms]);

  return (
    <StyledMap>
      {visibleRooms.map(tile => (
        <Tile sprite={sprite} {...tile} key={`${tile.x_coord} + ${tile.y_coord}`} />
      ))}
    </StyledMap>
  );
};

const StyledMap = styled.div`
  width: 640px;
  height: 640px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;
