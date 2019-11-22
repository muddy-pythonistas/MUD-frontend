import React, { useEffect } from 'react';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import { Sidebar, Map, Player, Info } from '../components';

import { useStateValue } from '../hooks/useStateValue';
import { getMap, gameInit, getOccupiedRooms, addMessage } from '../actions';

Pusher.logToConsole = Boolean(process.env.REACT_APP_pusherLog);

const pusher = new Pusher(process.env.REACT_APP_pusherKey, {
    cluster: process.env.REACT_APP_pusherCluster,
});

export const Game = () => {
    const [{ map, game }, dispatch] = useStateValue();

    useEffect(() => {
        getMap(dispatch);
        gameInit(dispatch);
        getOccupiedRooms(dispatch);
        let interval = setInterval(() => {
            getOccupiedRooms(dispatch);
        }, 250);

        return () => {
            clearInterval(interval);
        };
    }, [dispatch]);

    useEffect(() => {
        if(game.uuid)
            console.log('display modal', game.hasWon, game.items)
    }, [game.attempts]);

    useEffect(() => {
        subscribeToPusher(game.uuid);
    }, [game.uuid]);

    const subscribeToPusher = uuid => {
        const channel = pusher.subscribe(`p-channel-${uuid}`);

        channel.bind('broadcast', data => {
            addMessage(dispatch, data);
        });
    };

    let sortedMap = map.rooms
        .sort((a, b) => a.x_coord - b.x_coord)
        .sort((a, b) => a.y_coord - b.y_coord);

    return (
        <StyledGame>
            <MapWithSidebar>
                <Map
                    rooms={sortedMap}
                    x={game.local_x}
                    y={game.local_y}
                    occupied_rooms={map.occupied_rooms}
                />
                <Player character={game.sprite} />
                <Sidebar />
            </MapWithSidebar>
            <Info />
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
  margin-top: 60px;
  width: 840px;
  display: grid;
  grid-template-rows: auto auto;
`;
