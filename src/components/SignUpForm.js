import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signUp } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import styled from 'styled-components';

const SignUpForm = props => {
    const [{ signUpState }, dispatch] = useStateValue();

    const [userInput, setUserInput] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    const [userErrors, setUserErrors] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    useEffect(() => {
        for (let key in signUpState.errorMessage) {
            setUserErrors(prevState => ({
                ...prevState,
                [key]: signUpState.errorMessage[key],
            }));
            setUserInput(prevState => ({
                ...prevState,
                [key]: '',
            }));
            if (key === 'password1') {
                setUserInput(prevState => ({
                    ...prevState,
                    password2: '',
                }));
            }
        }
    }, [signUpState.errorMessage]);

    const handleChange = e => {
        e.persist();
        setUserInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setUserErrors(prevState => ({
            ...prevState,
            [e.target.name]: '',
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        let validated = validateData();
        if (validated) {
            signUp(dispatch, userInput).then(res => {
                if (res) props.history.push('/game');
            });
        }
    };

    const validateData = async () => {
        await checkPasswords();
        await requiredFields();
        let errorsPresent = await checkForErrors();
        return errorsPresent;
    };

    const requiredFields = () => {
        for (let key in userErrors) {
            if (userInput[key]) {
                continue;
            } else {
                setUserErrors(prevState => ({
                    ...prevState,
                    [key]: 'This field is required.',
                }));
            }
        }
        return;
    };

    const checkPasswords = () => {
        let passTest = /^(?=.*\d).{8}/.test(userInput.password1);
        if (!passTest) {
            setUserErrors(prevState => ({
                ...prevState,
                password1:
                    'Password must be at least 8 characters with one number.',
            }));
            setUserInput(prevState => ({
                ...prevState,
                password1: '',
                password2: '',
            }));
        }

        if (
            userInput.password1 &&
            userInput.password2 &&
            userInput.password1 !== userInput.password2
        ) {
            setUserErrors(prevState => ({
                ...prevState,
                password1: 'Your passwords must match. Please try again.',
                password2: 'Your passwords must match. Please try again.',
            }));
            setUserInput(prevState => ({
                ...prevState,
                password1: '',
                password2: '',
            }));
        }
        return;
    };

    const checkForErrors = () => {
        let errors = 0;
        for (let key in userErrors) {
            if (userErrors[key]) {
                errors++;
            }
        }

        return errors === 0;
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormLabel>
                Username:
                <FormInput
                    name='username'
                    type='text'
                    value={userInput.username}
                    onChange={handleChange}
                    error={userErrors.username}
                />
                <ErrorText>{userErrors.username}</ErrorText>
            </FormLabel>
            <FormLabel>
                Password:
                <FormInput
                    name='password1'
                    type='password'
                    value={userInput.password1}
                    onChange={handleChange}
                    error={userErrors.password1}
                />
                <ErrorText>{userErrors.password1}</ErrorText>
            </FormLabel>
            <FormLabel>
                Confirm Password:
                <FormInput
                    name='password2'
                    type='password'
                    value={userInput.password2}
                    onChange={handleChange}
                    error={userErrors.password2}
                />
                <ErrorText>{userErrors.password2}</ErrorText>
            </FormLabel>
            <SubmitButton type='submit' onSubmit={handleSubmit} />
            <InfoLink>
                Already have an account? <Link to='/'>Login here!</Link>
            </InfoLink>
        </FormContainer>
    );
};

export default withRouter(SignUpForm);

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 5rem 2rem;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.accent3};
    font-weight: 700;
    font-family: ${({ theme }) => theme.titleFont};
    font-size: ${({ theme }) => theme.mediumFont};
    width: 60%;
    margin: 1.5rem auto 0;
`;

export const FormInput = styled.input`
    background: ${({ theme }) => theme.primary0};
    border: ${({ theme, error }) =>
        error ? `1px solid ${theme.errorRed}` : '1px solid white'};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 1.5rem 0 0.4rem;
    padding: 1rem 0.8rem;
    outline: none;
    color: ${({ theme }) => theme.accent3};
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: ${({ theme }) => theme.largeFont};
`;

export const SubmitButton = styled.input`
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    background: ${({ theme }) => theme.accent3};
    color: white;
    font-weight: 700;
    font-family: ${({ theme }) => theme.titleFont};
    font-size: ${({ theme }) => theme.mediumFont};
    min-width: 60%;
    margin: 2rem auto;
    padding: 0.8rem;
    outline: none;
    cursor: pointer;
`;

export const InfoLink = styled.h3`
    text-align: center;
    font-family: ${({ theme }) => theme.titleFont};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight: 600;
    color: ${({ theme }) => theme.accent3};

    a {
        color: ${({ theme }) => theme.accent3};
    }
`;

export const ErrorText = styled.span`
    color: ${({ theme }) => theme.errorRed}
    font-size: ${({ theme }) => theme.tinyFont};
    font-family: ${({ theme }) => theme.bodyFont};
    min-height: 15px;
`;
