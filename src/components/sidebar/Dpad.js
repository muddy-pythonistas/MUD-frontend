import React, { useEffect } from 'react';
import styled from 'styled-components';
import { dpadSpriteN, dpadSpriteE, dpadSpriteS, dpadSpriteW } from './assets';
import { move, grabItem } from '../../actions';
import { useStateValue } from '../../hooks/useStateValue';

export const Dpad = () => {
    const [{ map, game }, dispatch] = useStateValue();

    const localMove = async direction => {
        const currentRoom = map.rooms[game.curr_room - 1];
        const checkMove = direction => {
            switch (direction) {
                case 'n':
                    return currentRoom.n_to;
                case 'e':
                    return currentRoom.e_to;
                case 's':
                    return currentRoom.s_to;
                case 'w':
                    return currentRoom.w_to;
                default:
                    return null;
            }
        };
        const newRoom = checkMove(direction);
        if (newRoom) {
            const storedRoom = map.rooms[newRoom - 1];
            if (storedRoom.item_id > 1) {
                await grabItem(dispatch, { item: storedRoom.item_id });
            }
            move(dispatch, { direction: direction }, newRoom);
        } else {
            return null;
        }
    };

    const handleUserKeyPress = event => {
        const { keyCode } = event;
        switch (keyCode) {
            case 37:
                localMove('w');
                break;
            case 38:
                localMove('n');
                break;
            case 39:
                localMove('e');
                break;
            case 40:
                localMove('s');
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', handleUserKeyPress);

        return () => {
            window.removeEventListener('keyup', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return (
        <DpadContainer>
            <StyledDpad>
                <NorthButton onClick={() => localMove('n')} />
                <EastButton onClick={() => localMove('e')} />
                <SouthButton onClick={() => localMove('s')} />
                <WestButton onClick={() => localMove('w')} />
            </StyledDpad>
        </DpadContainer>
    );
};

const DpadContainer = styled.div`
    border-radius: 50%;
    background-color: #444;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledDpad = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    transform: scale(0.75);
`;

const DButton = styled.div`
    position: absolute;
    cursor: pointer;
`;
const VertButton = styled(DButton)`
    left: 50px;
    width: 61px;
    height: 76px;
`;
const NorthButton = styled(VertButton)`
    top: 0px;
    background-image: url(${dpadSpriteN});
    transform-origin: 50% -100%;
`;
const SouthButton = styled(VertButton)`
    bottom: 0px;
    background-image: url(${dpadSpriteS});
`;

const HorzButton = styled(DButton)`
    top: 50px;
    width: 76px;
    height: 61px;
`;
const EastButton = styled(HorzButton)`
    right: 0px;
    background-image: url(${dpadSpriteE});
`;
const WestButton = styled(HorzButton)`
    left: 0px;
    background-image: url(${dpadSpriteW});
`;
