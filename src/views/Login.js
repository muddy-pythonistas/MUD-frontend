import React, { useState } from 'react';
import styled from 'styled-components';
import {LoginForm} from '../components'

export const Login = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
};

const LoginContainer = styled.div``;
