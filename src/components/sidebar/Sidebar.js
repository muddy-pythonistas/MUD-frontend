import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../hooks/useStateValue';

import { Chat } from '../chat';
import { gold, sword, shield, key, door } from '../info/assets/items';
import { Avatar, PlayerName, Inventory, ItemContainer, Item } from '../info';
export const Sidebar = () => {
    const [{ game, map }] = useStateValue();
    const [doorMessage, setDoorMessage] = useState(false);
    const itemList = [
        { id: 1, name: 'Empty', img: gold },
        { id: 2, name: 'Gold', img: gold },
        { id: 3, name: 'Sword', img: sword },
        { id: 4, name: 'Shield', img: shield },
        { id: 5, name: 'Key', img: key },
        { id: 6, name: 'Door', img: door },
    ];
    useEffect(() => {
        if (game.uuid) setDoorMessage(true);
    }, [game.attempts]);

    console.log(game)
    return (
        <StyledControls>
            <Avatar character='warrior' />
            <PlayerName>{game.name}</PlayerName>
            <Inventory>
                {game.items.map(item => {
                    const itemObj = itemList.find(i => i.id === item.id);
                    return (
                        <ItemContainer>
                            <Item img={itemObj.img} key={itemObj.id} />
                            <span>{item.id === 2 ? game.gold : 1}</span>
                        </ItemContainer>
                    );
                })}
            </Inventory>
            <OtherPlayers>
                <span>Other players nearby:</span>
                {game.players.map(player => (
                    <OtherPlayer>{player}</OtherPlayer>
                ))}
            </OtherPlayers>
            <DoorMessage>

                {doorMessage && (
                    <span>
                        {game.hasWon
                            ? 'Hmm...it appears the door is locked.'
                            : 'The door opens to a new world...'}
                    </span>
                )}
            </DoorMessage>
            <Chat />
        </StyledControls>
    );
};
const DoorMessage = styled.div`
    height: 20px;
    font-size: ${({ theme }) => theme.smallFont};
    font-family: ${({ theme }) => theme.infoBody};
    color: ${({ theme }) => theme.infoColor};
`;
const OtherPlayers = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: ${({ theme }) => theme.mediumFont};
    height: 120px;
    overflow-y: auto;
`;

const OtherPlayer = styled.span`
    font-size: ${({ theme }) => theme.smallFont};
`;

const StyledControls = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
    min-width: 300px;
    font-family: ${({ theme }) => theme.infoBody};
    color: ${({ theme }) => theme.infoColor};
`;
