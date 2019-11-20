import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import {
    FormContainer,
    FormLabel,
    FormInput,
    SubmitButton,
    InfoLink,
    ErrorText,
} from './SignUpForm';

const LoginForm = props => {
    const [{ loginState }, dispatch] = useStateValue();

    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });

    const [userErrors, setUserErrors] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        for (let key in loginState.errorMessage) {
            setUserErrors(prevState => ({
                ...prevState,
                [key]: loginState.errorMessage[key],
            }));
            setUserInput(prevState => ({
                ...prevState,
                [key]: '',
            }));
            if (key === 'non_field_errors') {
                setUserErrors(prevState => ({
                    ...prevState,
                    username: loginState.errorMessage[key],
                }));
                setUserInput(prevState => ({
                    ...prevState,
                    username: '',
                    password: '',
                }));
            }
        }
    }, [loginState.errorMessage]);

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
        login(dispatch, userInput).then(res => {
            if (res) props.history.push('/game');
        });
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
                    name='password'
                    type='password'
                    value={userInput.password}
                    onChange={handleChange}
                    error={userErrors.password}
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

export default withRouter(LoginForm);
