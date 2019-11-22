import React, { useEffect } from 'react';
import styled from 'styled-components';
import { WelcomeHeader } from '../components';
import SignUpForm from '../components/SignUpForm';
import { clearErrors } from '../actions';
import {useStateValue} from '../hooks/useStateValue'

export const SignUp = () => {
    const [,dispatch] = useStateValue()

    useEffect(() => {
        clearErrors(dispatch);
    }, [dispatch]);

    return (
        <>
            <WelcomeHeader />
            <SignUpContainer>
                <SignUpForm />
            </SignUpContainer>
        </>
    );
};

export const SignUpContainer = styled.div`
    background: ${({ theme }) => theme.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    min-width: 500px;
    min-height: 200px;
`;
