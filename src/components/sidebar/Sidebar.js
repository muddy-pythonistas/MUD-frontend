import React from 'react';
import styled from 'styled-components';
import { Dpad } from './Dpad';
import { Chat } from '../chat';

export const Sidebar = () => {
  return (
    <StyledControls>
      <Dpad />
      <Chat />
    </StyledControls>
  );
};

const StyledControls = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  min-width: 300px;
`;
