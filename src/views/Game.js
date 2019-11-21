import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Sidebar, Map, Player, Info, Chat } from '../components';

import { useStateValue } from '../hooks/useStateValue';
import { getMap, gameInit } from '../actions';

export const Game = () => {
  const [{ map, game }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
    gameInit(dispatch);
  }, []);

  let sortedMap = map.rooms
    .sort((a, b) => a.x_coord - b.x_coord)
    .sort((a, b) => a.y_coord - b.y_coord);
  return (
    <StyledGame>
      <MapWithSidebar>
        <Map rooms={sortedMap} x={game.x_coord} y={game.y_coord} />
        <Player />
        <Sidebar />
      </MapWithSidebar>
      <Info />
      <Chat />
    </StyledGame>
  );
};

const MapWithSidebar = styled.div`
  width: 840px;
  position: relative;

  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const StyledGame = styled.div`
  width: 840px;
  display: grid;
  grid-template-rows: auto auto;
`;
