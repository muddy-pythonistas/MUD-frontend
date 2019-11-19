import React from 'react';
import styled from 'styled-components';
import { dpadSpriteN, dpadSpriteE, dpadSpriteS, dpadSpriteW } from './assets';

export const Dpad = () => {
  return (
    <DpadContainer>
      <StyledDpad>
        <NorthButton />
        <EastButton />
        <SouthButton />
        <WestButton />
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
