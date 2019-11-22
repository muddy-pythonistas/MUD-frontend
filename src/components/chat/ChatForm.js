import React, { useState } from 'react';
import styled from 'styled-components';

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput name='message' value={input.message} onChange={handleChange}/>
      <StyledButton>SEND</StyledButton>
    </StyledForm>
  )
}

export default ChatForm;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 100%;
  border-bottom-left-radius: 10px;
  border: none;
  padding: 0.4rem 1rem;
  background: transparent
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.infoBody};

  &:focus {
    outline: none;
  }
}
`

const StyledButton = styled.button`
  border: none;
  border-bottom-right-radius: 10px;
  background: transparent
  font-family: ${({ theme }) => theme.infoBody};
  color: ${({ theme }) => theme.white};
  padding: 1rem;
  font-size: ${({ theme }) => theme.smallFont};
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.accent2};
  }

  &:focus {
    outline: none;
  }
`