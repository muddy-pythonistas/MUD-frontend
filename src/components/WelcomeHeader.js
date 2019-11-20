import React from 'react';
import styled from 'styled-components';

export const WelcomeHeader = () => {
    return (
        <HeaderContainer>
            <h1>Welcome to</h1>
            <h1>Python Quest!</h1>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;

    h1 {
        font-size: ${({ theme }) => theme.headerSize};
        color: ${({ theme }) => theme.primary0};
        font-family: ${({ theme }) => theme.titleFont};
    }
`;
