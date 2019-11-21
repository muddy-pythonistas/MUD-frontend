import React from 'react';
import styled from 'styled-components';
import { dpadSpriteN, dpadSpriteE, dpadSpriteS, dpadSpriteW } from './assets';
import { move } from '../../actions';
import { useStateValue } from '../../hooks/useStateValue';

export const Dpad = () => {
  const [{ map, game }, dispatch] = useStateValue();

  const localMove = direction => {
    const currentRoom = map.rooms.find(r => r.id === game.curr_room);

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
      move(dispatch, { direction: direction }, newRoom);
    } else {
      return null;
    }
  };

  // TODO: arrow key support
  //
  // const handleUserKeyPress = useCallback(event => {
  //   const { key, keyCode } = event;

  //   switch (keyCode) {
  //     case 37:
  //       localMove('w');
  //       break;
  //     case 38:
  //       localMove('n');
  //       break;
  //     case 39:
  //       localMove('e');
  //       break;
  //     case 40:
  //       localMove('s');
  //       break;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('keydown', handleUserKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleUserKeyPress);
  //   };
  // }, [handleUserKeyPress]);

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
