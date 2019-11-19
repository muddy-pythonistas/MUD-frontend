import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Sidebar, Tile } from '../components';

import { useStateValue } from '../hooks/useStateValue';

const testTiles = [
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 0
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 0,
    s_to: 1,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 1,
    w_to: 0
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 1,
    e_to: 0,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 1,
    e_to: 1,
    s_to: 0,
    w_to: 0
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 0,
    s_to: 1,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 0
  },
  {
    n_to: 0,
    e_to: 1,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 0,
    e_to: 0,
    s_to: 0,
    w_to: 1
  },
  {
    n_to: 1,
    e_to: 0,
    s_to: 0,
    w_to: 1
  }
];

export const Game = () => {
  return (
    <StyledGame>
      <Map>
        {testTiles.map(tile => (
          <Tile {...tile} />
        ))}
      </Map>
      <Sidebar />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  width: 800px;

  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Map = styled.div`
  width: 640px;
  height: 640px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;
