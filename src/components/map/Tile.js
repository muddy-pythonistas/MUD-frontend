import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cornerCW_32x64, horzWall_32x64, vertWall_32x32 } from './assets';
import { gold, sword, shield, key, door } from './assets/items';

export const Tile = ({
    n_to,
    e_to,
    s_to,
    w_to,
    sprite,
    item_id,
    occupied_rooms,
    id,
    ...rest
}) => {
    const itemList = [
        { id: 1, name: 'Empty', img: gold },
        { id: 2, name: 'Gold', img: gold },
        { id: 3, name: 'Sword', img: sword },
        { id: 4, name: 'Shield', img: shield },
        { id: 5, name: 'Key', img: key },
        { id: 6, name: 'Door', img: door },
    ];

    const [localOccupied, setLocalOccupied] = useState(false);

    useEffect(() => {
        if(occupied_rooms.includes(id)){
            setLocalOccupied(true)
        }
        else{
            setLocalOccupied(false)
        }
    }, [occupied_rooms]);

    const item = itemList.find(item => item.id === item_id);
    if (n_to || e_to || s_to || w_to) {
        return (
            <TileContainer>
                <FullTileFloor tile={sprite} />
                {localOccupied && 'test'}
                <Item img={item.img} id={item.id} />
                <TileWallGrid>
                    {n_to ? (
                        w_to ? (
                            <CornerSE />
                        ) : (
                            <WestWall />
                        )
                    ) : w_to ? (
                        <NorthWall />
                    ) : (
                        <CornerNW />
                    )}
                    {n_to ? <FloorTile tile={sprite} /> : <NorthWall />}
                    {n_to ? (
                        e_to ? (
                            <CornerSW />
                        ) : (
                            <EastWall />
                        )
                    ) : e_to ? (
                        <NorthWall />
                    ) : (
                        <CornerNE />
                    )}

                    {w_to ? <FloorTile tile={sprite} /> : <WestWall />}
                    <FloorTile tile={sprite} />
                    {e_to ? <FloorTile tile={sprite} /> : <EastWall />}
                    {s_to ? (
                        w_to ? (
                            <CornerNE />
                        ) : (
                            <WestWall />
                        )
                    ) : w_to ? (
                        <SouthWall />
                    ) : (
                        <CornerSW />
                    )}
                    {s_to ? <FloorTile tile={sprite} /> : <SouthWall />}
                    {s_to ? (
                        e_to ? (
                            <CornerNW />
                        ) : (
                            <EastWall />
                        )
                    ) : e_to ? (
                        <SouthWall />
                    ) : (
                        <CornerSE />
                    )}
                </TileWallGrid>
            </TileContainer>
        );
    } else {
        return <EmptyTile />;
    }
};

const FloorTile = styled.div`
    background-image: url(${props => props.tile});
    background-repeat: repeat;
    background-size: 16px 16px;
`;

const CornerSprite = styled.div`
    width: 16px;
    height: 32px;
    background-image: url(${cornerCW_32x64});
    background-size: 64px 32px;
`;

const CornerNW = styled(CornerSprite)`
    background-position: 0px 0px;
`;
const CornerNE = styled(CornerSprite)`
    background-position: 48px 0px;
`;
const CornerSE = styled(CornerSprite)`
    background-position: 32px 0px;
`;
const CornerSW = styled(CornerSprite)`
    background-position: 16px 0px;
`;

const Wall = styled.div`
    background-repeat: repeat;
`;

const VertWall = styled(Wall)`
    width: 16px;
    background-repeat: repeat-y;
    background-image: url(${vertWall_32x32});
    background-size: 16px 16px;
`;

const WestWall = styled(VertWall)``;
const EastWall = styled(VertWall)``;

const HorzWall = styled(Wall)`
    height: 32px;
    background-repeat: repeat-x;
    background-image: url(${horzWall_32x64});
    background-size: 16px 32px;
`;

const NorthWall = styled(HorzWall)``;
const SouthWall = styled(HorzWall)``;

const TileWallGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 16px auto 16px;
    grid-template-rows: 32px auto 32px;
`;

const FullTileFloor = styled.div`
    position: absolute;
    background-image: url(${props => props.tile});
    background-repeat: repeat;
    z-index: -1;
    top: 2px;
    left: 0px;
    bottom: 2px;
    right: 0px;
`;

const TileContainer = styled.div`
    position: relative;
`;

const EmptyTile = styled.div``;

const Item = styled.div`
    position: absolute;
    left: ${props => (props.id === 6 ? '32px' : '48px')};
    top: ${props => (props.id === 6 ? '-32px' : '48px')};
    background-image: url(${props => props.img});
    background-image: no-repeat;
    height: ${props => (props.id === 6 ? '64px' : '32px')};
    width: ${props => (props.id === 6 ? '64px' : '32px')};
    background-size: ${props => (props.id === 6 ? '64px 64px' : '32px 32px')};

    display: ${props => (props.id === 1 ? 'none' : 'block')};

    @keyframes mover {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-4px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    animation: ${props =>
        props.id === 6 ? 'none' : 'mover 2s infinite ease-in-out'};
`;
