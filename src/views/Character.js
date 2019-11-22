import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../hooks/useStateValue';

import { setCharacter } from '../actions';
import { Avatar } from '../components/info';
import { playerSprite } from '../components/player/assets';

export const Character = props => {
  const characterClasses = [
    {
      name: 'Warrior',
      id: 0,
      description:
        'A master of martial combat, skilled with a variety of weapons and armor.'
    },
    {
      name: 'Rogue',
      id: 1,
      description:
        'A thief who uses stealth and trickery to overcome obstacles and enemies.'
    },
    {
      name: 'Ranger',
      id: 2,
      description:
        'A warrior who uses archery and nature magic to combat threats on the edges of civilization.'
    },
    {
      name: 'Mage',
      id: 3,
      description:
        'A scholarly magic-user capable of manipulating the structures of reality.'
    }
  ];
  const characterSprites = [
    { id: 0, name: 'Boy' },
    { id: 1, name: 'Girl' }
  ];

  const [{ game }, dispatch] = useStateValue();
  const [hoverCharacter, setHoverCharacter] = useState({
    name: '',
    id: -1,
    description: ''
  });
  const [selectedCharacterClass, setSelectedCharacterClass] = useState({
    name: '',
    id: -1,
    description: ''
  });
  const [selectedCharacterSprite, setSelectedCharacterSprite] = useState({
    id: -1,
    name: ''
  });

  useEffect(() => {
    console.log(selectedCharacterSprite);
  }, [selectedCharacterSprite]);
  useEffect(() => {
    console.log(selectedCharacterClass);
  }, [selectedCharacterClass]);

  const handleSubmit = e => {
    e.preventDefault();
    setCharacter(dispatch, {
      char_class: selectedCharacterClass.name,
      sprite: selectedCharacterSprite.name
    });
    props.history.push('/game');
  };

  return (
    <Container>
      <Title>Choose a Class</Title>
      <CharacterClassList>
        {characterClasses.map(char => (
          <CharacterClass
            key={char.id}
            onClick={() => setSelectedCharacterClass({ ...char })}
            onMouseOver={() => setHoverCharacter(char)}
            selected={selectedCharacterClass.id === char.id}
          >
            <Avatar
              character={char.name}
              dark={selectedCharacterClass.id === char.id}
            />
            <CharacterName>{char.name}</CharacterName>
          </CharacterClass>
        ))}
      </CharacterClassList>
      <CharacterDescription>{hoverCharacter.description}</CharacterDescription>
      <Title>Choose your Appearance</Title>
      <SpriteList>
        {characterSprites.map(char => (
          <Sprite
            selected={selectedCharacterSprite.id === char.id}
            key={char.id}
            onClick={() => setSelectedCharacterSprite(char)}
          >
            <Player character={char} />
          </Sprite>
        ))}
      </SpriteList>

      <ButtonContainer>
        <Button
          onClick={handleSubmit}
          disabled={
            selectedCharacterClass.id == -1 || selectedCharacterSprite.id == -1
          }
        >
          Start Adventure
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Player = props => {
  const characterSprite = props.character.name.toLowerCase() || 'boy';
  let yOffset = '0px';

  switch (characterSprite) {
    case 'boy':
      yOffset = '0px';
      break;
    case 'girl':
      yOffset = '-32px';
      break;
    default:
      yOffset = '0px';
  }

  return <StyledPlayer yOffset={yOffset} />;
};

const Container = styled.div`
  margin-top: 32px;
  max-width: 900px;
  color: ${({ theme }) => theme.grayAccent};
  font-family: ${({ theme }) => theme.infoBody};
`;

const Title = styled.div`
  margin: 16px auto;
  max-width: 500px;
  font-family: ${({ theme }) => theme.infoTitle};
  font-size: ${({ theme }) => theme.hugeFont};
  border-width: 5px;
  border-style: double;
  border-color: ${({ theme }) => theme.grayAccent};
  padding: 8px;
  text-align: center;
`;

const CharacterClassList = styled.div`
  display: grid;
  width: 832px;
  grid-template-columns: repeat(4, 1fr);
`;
const CharacterClass = styled.div`
  font-family: ${({ theme }) => theme.infoTitle};
  font-size: ${({ theme }) => theme.largeFont};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 4px;

  border-width: 3px;
  border-style: solid;
  border-color: transparent;

  color: ${({ selected, theme }) => (selected ? '#222' : theme.grayAccent)};
  background-color: ${({ selected, theme }) =>
    selected ? theme.yellowAccent : 'transparent'};

  &:hover {
    border-color: ${({ theme }) => theme.yellowAccent};
  }
`;

const CharacterName = styled.div`
  margin-bottom: 16px;
`;

const CharacterDescription = styled.div`
  margin: 32px 32px 16px 32px;
  height: 64px;
  width: 800px;
  font-size: ${({ theme }) => theme.largeFont};
`;

const SpriteList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Sprite = styled.div`
  padding: 16px;
  margin: 16px;

  border-width: 3px;
  border-style: solid;
  border-color: transparent;

  cursor: pointer;

  background-color: ${({ selected, theme }) =>
    selected ? theme.yellowAccent : 'transparent'};

  &:hover {
    border-color: ${({ theme }) => theme.yellowAccent};
  }
`;

const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
  background-position-x: 0px;
  background-position-y: ${props => props.yOffset};
  background-size: 128px 64px;
  width: 32px;
  height: 32px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 32px;
`;
const Button = styled.button`
  padding: 10px 32px 8px 32px;
  font-family: ${({ theme }) => theme.infoTitle};
  background-color: ${({ theme }) => theme.grayAccent};
  font-size: ${({ theme }) => theme.hugeFont};
  border-style: double;
  border-width: 10px;
  border-color: ${({ theme }) => theme.yellowAccent};
  cursor: pointer;
  outline: none;

  &:disabled {
    border-color: ${({ theme }) => theme.grayAccent};
    color: #666;
    cursor: default;
  }

  &:enabled {
    &:hover {
      background-color: ${({ theme }) => theme.yellowAccent};
      border-color: ${({ theme }) => theme.grayAccent};
    }
  }
`;
