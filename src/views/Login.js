import React, { useEffect } from 'react';
import styled from 'styled-components';
import { WelcomeHeader } from '../components';
import LoginForm from '../components/LoginForm';
import { SignUpContainer } from '../views/SignUp';
import { clearErrors } from '../actions'
import {useStateValue} from '../hooks/useStateValue'

export const Login = () => {
    const [,dispatch] = useStateValue()

    useEffect(() => {
        clearErrors(dispatch)
    }, [dispatch]);

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
