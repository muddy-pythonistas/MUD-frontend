import React from 'react';
import styled from 'styled-components';
import floorTile from './floorTile.png';
import bg from './bg.png';

export const Tile = props => {
  return (
    <TileContainer>
      <StyledTile {...props} />
    </TileContainer>
  );
};

const StyledTile = styled.div`
  display: block;
  width: 128px;
  height: 128px;
  background-image: url(${floorTile});
  border-width: 0px;
  border-style: solid;
  border-color: #222;
  border-image-source: url(${floorTile});

  border-top-width: ${({ n_to }) => (n_to ? '16px' : '0px')};
  border-right-width: ${({ e_to }) => (e_to ? '16px' : '0px')};
  border-bottom-width: ${({ s_to }) => (s_to ? '16px' : '0px')};
  border-left-width: ${({ w_to }) => (w_to ? '16px' : '0px')};

  margin-top: ${({ n_to }) => (n_to ? '0px' : '16px')};
  margin-right: ${({ e_to }) => (e_to ? '0px' : '16px')};
  margin-bottom: ${({ s_to }) => (s_to ? '0px' : '16px')};
  margin-left: ${({ w_to }) => (w_to ? '0px' : '16px')};
`;

const TileContainer = styled.div``;
