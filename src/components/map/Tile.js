import React from 'react';
import styled from 'styled-components';
import { cornerCW_16x32, horzWall_16x32, vertWall_16x16 } from './assets';

export const Tile = ({ n_to, e_to, s_to, w_to, sprite, ...rest }) => {
  if (n_to || e_to || s_to || w_to) {
    return (
      <TileContainer>
        <FullTileFloor tile={sprite} />
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
  background-size: 14px;
`;

const CornerSprite = styled.div`
  width: 16px;
  height: 32px;
  background-image: url(${cornerCW_16x32});
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
  background-image: url(${vertWall_16x16});
`;

const WestWall = styled(VertWall)``;
const EastWall = styled(VertWall)``;

const HorzWall = styled(Wall)`
  height: 32px;
  background-repeat: repeat-x;
  background-image: url(${horzWall_16x32});
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
