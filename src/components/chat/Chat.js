import React from 'react';
import ChatForm from './ChatForm';
import { useStateValue } from '../../hooks/useStateValue';
import { say } from '../../actions';

export const Chat = () => {
  const [{ game }, dispatch] = useStateValue()

  const handleSubmit = (input) => {
    say(dispatch, input)
  }

  return (
    <div>
      <div>
        {game.messages.map(item => <p key={item.id}>{item.message}</p>)}
      </div>
      <ChatForm handleSubmit={handleSubmit}/>
    </div>
  )
} 

export default Chat;