import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../hooks/useStateValue';

import { classSprites_288 } from './assets';
import { sword, shield } from './assets/items';

export const Info = () => {
  const [{ game, map }] = useStateValue();
  const [currentRoom, setCurrentRoom] = useState();

  useEffect(() => {
    setCurrentRoom(map.rooms[game.curr_room - 1]);
  }, [game.curr_room, map.rooms]);

  // TODO: items in state
  const items = [sword, shield];

  return (
    <StyledInfo>
      <Avatar character='warrior' />
      <RoomInfo>
        <RoomTitle>{currentRoom ? currentRoom.title : ''}</RoomTitle>
        <RoomDesc>{currentRoom ? currentRoom.description : ''}</RoomDesc>
      </RoomInfo>
      <PlayerName>{game.name}</PlayerName>
      <Inventory>
        {items.map(item => (
          <Item img={item} key={item} />
        ))}
      </Inventory>
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
    case 'archer':
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
  width: 100%;
  height: 232px;

  display: grid;
  grid-template-rows: 176px 56px;
  grid-template-columns: 176px auto;

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

const PlayerName = styled.div`
  font-size: ${({ theme }) => theme.mediumFont};
  margin: 8px 0;
  text-align: center;
`;

const RoomInfo = styled.div`
  margin-top: 24px;
  max-width: 450px;
`;
const RoomTitle = styled.div`
  font-family: ${({ theme }) => theme.infoTitle};
  font-size: ${({ theme }) => theme.largeFont};
  margin: 8px 0;
`;

const RoomDesc = styled.div`
  font-size: ${({ theme }) => theme.mediumFont};
`;

const Inventory = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Item = styled.div`
  width: 32px;
  height: 32px;
  background-size: 32px 32px;
  background-image: ${({ img }) => `url(${img})`};
  margin-right: 8px;
`;
