import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import {
    FormContainer,
    FormLabel,
    FormInput,
    SubmitButton,
    InfoLink,
    ErrorText
} from './SignUpForm';

export const LoginForm = () => {
    const [, dispatch] = useStateValue();

    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });

    const [userErrors, setUserErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = e => {
        e.persist();
        setUserInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setUserErrors(prevState => ({
            ...prevState,
            [e.target.name]: ''
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        let validated = validateData();
        if (validated) {
            login(dispatch, userInput);
        }
    };

    const validateData = () => {
        requiredFields();
        let errorsPresent = checkForErrors();
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
                    error = {userErrors.username}
                />
                <ErrorText>{userErrors.username}</ErrorText>
            </FormLabel>
            <FormLabel>
                Password:
                <FormInput
                    name='password'
                    type='password'
                    value={userInput.password}
                    onChange={handleChange}
                    error = {userErrors.password}
                />
                <ErrorText>{userErrors.password}</ErrorText>
            </FormLabel>
            <SubmitButton type='submit' onSubmit={handleSubmit} />
            <InfoLink>
                Don't have an account yet?{' '}
                <Link to='/signup'>Sign up here!</Link>
            </InfoLink>
        </FormContainer>
    );
};
