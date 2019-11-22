import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../hooks/useStateValue';
import { Dpad } from '../sidebar';
import { classSprites_288 } from './assets';
import { gold, sword, shield, key, door } from './assets/items';

export const Info = () => {
    const [{ game, map }] = useStateValue();
    const [currentRoom, setCurrentRoom] = useState();

    

    useEffect(() => {
        setCurrentRoom(map.rooms[game.curr_room - 1]);
    }, [game.curr_room, map.rooms]);

    return (
        <StyledInfo>
            <RoomInfo>
                <RoomTitle>{currentRoom ? currentRoom.title : ''}</RoomTitle>
                <RoomDesc>
                    {currentRoom ? currentRoom.description : ''}
                </RoomDesc>
            </RoomInfo>
            <Dpad />
        </StyledInfo>
    );
};

export const Avatar = ({ character, dark }) => {
    let yOffset = '0px';
    if (dark) {
        yOffset = '-144px';
    }

    let xOffset = '0px';
    switch (character.toLowerCase()) {
        case 'warrior':
            xOffset = '0px';
            break;
        case 'rogue':
            xOffset = '-144px';
            break;
        case 'ranger':
            xOffset = '-288px';
            break;
        case 'mage':
            xOffset = '-432px';
            break;
        default:
            xOffset = '0px';
    }

    return <ClassSprite xOffset={xOffset} yOffset={yOffset} />;
};

const StyledInfo = styled.div`
    background-color: #333;
    width: 940px;
    height: 200px;

    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center

    font-family: ${({ theme }) => theme.infoBody};
    color: ${({ theme }) => theme.infoColor};
`;

const ClassSprite = styled.div`
    background-image: url(${classSprites_288});
    background-repeat: no-repeat;
    background-size: 576px 288px;
    background-position-x: ${props => props.xOffset};
    background-position-y: ${props => props.yOffset};
    margin: 16px;
    width: 144px;
    height: 144px;
`;

export const PlayerName = styled.div`
    font-size: ${({ theme }) => theme.mediumFont};
    margin: 8px 0;
    text-align: center;
`;

const RoomInfo = styled.div`
    margin-top: 24px;
    width: 450px
`;
const RoomTitle = styled.div`
    font-family: ${({ theme }) => theme.infoTitle};
    font-size: ${({ theme }) => theme.largeFont};
    margin: 8px 0;
`;

const RoomDesc = styled.div`
    font-size: ${({ theme }) => theme.mediumFont};
`;

export const Inventory = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Item = styled.div`
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
    background-image: ${({ img }) => `url(${img})`};
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    span {
        font-family: ${({ theme }) => theme.infoTitle};
        text-align: center;
        font-size: 1.5rem;
        padding-top: 5px;
    }
`;
