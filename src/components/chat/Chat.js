import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { useStateValue } from '../../hooks/useStateValue';
import { say } from '../../actions';
import ChatForm from './ChatForm';

Pusher.logToConsole = true;

const pusher = new Pusher(
  process.env.REACT_APP_pusherKey, {
    cluster: process.env.REACT_APP_pusherCluster,
  }
)

export const Chat = () => {
  const [{ game }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  const channel = pusher.subscribe(`p-channel-${game.uuid}`);
   
  useEffect(() => {
    getUpdatesFromPusher()
  }, [])

  const getUpdatesFromPusher = () => {
    channel.bind('broadcast', data => {
      setMessages([...messages, data.message])
    })
  }

  const handleSubmit = (input) => {
    say(dispatch, input)
  }

  return (
    <div>
      <div>
        {messages.map(item => <p key={item.key}>{item.message}</p>)}
      </div>
      <ChatForm handleSubmit={handleSubmit}/>
    </div>
  )
} 

export default Chat;