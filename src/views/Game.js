import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Sidebar, Map, Player, Chat } from '../components';

import { useStateValue } from '../hooks/useStateValue';
import { getMap, gameInit } from '../actions';

const testTiles = [
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 0,
        s_to: 1,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 1,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 1,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 1,
        e_to: 1,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 1,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 0,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 0,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 1,
        e_to: 0,
        s_to: 1,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 0,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 0,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
    {
        n_to: 1,
        e_to: 1,
        s_to: 1,
        w_to: 1,
    },
    {
        n_to: 0,
        e_to: 1,
        s_to: 0,
        w_to: 1,
    },
];

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
            <Map rooms={sortedMap} x={game.x_coord} y={game.y_coord} />
            <Player />
            <Sidebar />
            <Chat />
        </StyledGame>
    );
};

const StyledGame = styled.div`
    width: 712px;
    position: relative;

    display: grid;
    grid-template-columns: 4fr 1fr;
`;
