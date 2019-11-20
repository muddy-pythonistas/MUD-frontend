import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Sidebar, Tile } from '../components';

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

    console.log(game)
    return (
        <StyledGame>
            <Map>
                {sortedMap.map(tile => (
                    <Tile {...tile} />
                ))}
            </Map>
            <Sidebar />
        </StyledGame>
    );
};

const StyledGame = styled.div`
    width: 712px;

    display: grid;
    grid-template-columns: 4fr 1fr;
`;

const Map = styled.div`
    width: 512px;
    height: 512px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
`;
