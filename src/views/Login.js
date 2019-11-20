import React from 'react';
import styled from 'styled-components';
import { LoginForm, WelcomeHeader } from '../components';
import { SignUpContainer } from '../views/SignUp';

export const Login = () => {
    return (
        <>
            <WelcomeHeader />
            <LoginContainer>
                <LoginForm />
            </LoginContainer>
        </>
    );
};

const LoginContainer = styled(SignUpContainer)``;
