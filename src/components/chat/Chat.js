import React from 'react';
import ChatForm from './ChatForm';
import styled from 'styled-components';
import { useStateValue } from '../../hooks/useStateValue';
import { say } from '../../actions';

export const Chat = () => {
  const [{ game }, dispatch] = useStateValue()

  const handleSubmit = (input) => {
    say(dispatch, input)
  }

  const displayMessages = game.messages.length > 8 ? game.messages.slice(game.messages.length - 1 - 7) : game.messages

  
  return (
    <StyledChat>
      <ChatDisplay>
        <div>
          {displayMessages.map(item => { 
            let textColor = item.message.includes('says') ? '#E3E4E7' : item.message.includes('entered from') ? '#7E9698' : '#8F96A9'; 
            return (
              <p key={item.id} style={{color: textColor}}>
                {item.message.includes(`${game.name} says`) ? item.message.replace(`${game.name} says`, 'you say') : item.message}
              </p>
            )  
          })}
        </div>
      </ChatDisplay>
      <ChatForm handleSubmit={handleSubmit}/>
    </StyledChat>
  )
} 

export default Chat;

const StyledChat = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.primary0};
  border-radius: 10px;
  background: #222222;
`;

const ChatDisplay = styled.div`
  height: 130px;
  width: 100%;
  font-family: ${({ theme }) => theme.infoBody};
  background: transparent
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: ${({ theme }) => theme.smallFont};
  border-bottom: 1px solid ${({ theme }) => theme.primary0};

  div {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0.8rem 0 0.8rem 1rem;
    height: 120px;

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  
    &::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.accent0};
    }
  }  
`