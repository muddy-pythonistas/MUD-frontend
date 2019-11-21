import React, { useState } from 'react';

const ChatForm = (props) => {
  const [input, setInput] = useState({
    message: ''
  });

  const handleChange = (e) => {
    setInput({
      message: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input)
    setInput({
      message: ''
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input name='message' value={input.message} onChange={handleChange}/>
      <button>Send</button>
    </form>
  )
}

export default ChatForm;