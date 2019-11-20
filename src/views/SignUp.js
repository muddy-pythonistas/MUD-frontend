import React from 'react';
import styled from 'styled-components';
import { WelcomeHeader } from '../components';
import SignUpForm from '../components/SignUpForm'

export const SignUp = () => {
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
