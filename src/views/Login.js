import React from 'react';
import styled from 'styled-components';
import { WelcomeHeader } from '../components';
import LoginForm from '../components/LoginForm'
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
