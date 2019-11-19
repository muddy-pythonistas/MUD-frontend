import React, { useState } from 'react';
import {signUp} from '../actions'
import {useStateValue} from '../hooks/useStateValue'

export const SignUpForm = () => {
    const [,dispatch] = useStateValue()

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

    const handleChange = e => {
        e.persist();
        setUserInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        let validated = validateData();
        if (validated) {
            signUp(dispatch, userInput)
        }
    };

    const validateData = async () => {
        await requiredFields();
        await checkPasswords()
        let errorsPresent = await checkForErrors()
        return errorsPresent
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
        return
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

        if (userInput.password1 !== userInput.password2) {
            setUserErrors(prevState => ({
                ...prevState,
                password2: 'Your passwords must match. Please try again.',
            }));
            setUserInput(prevState => ({
                ...prevState,
                password1: '',
                password2: '',
            }));
        }
        return 
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
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    name='username'
                    type='text'
                    value={userInput.username}
                    onChange={handleChange}
                />
                <span>{userErrors.username}</span>
            </label>
            <label>
                Password:
                <input
                    name='password1'
                    type='password'
                    value={userInput.password1}
                    onChange={handleChange}
                />
                <span>{userErrors.password1}</span>
            </label>
            <label>
                Confirm Password:
                <input
                    name='password2'
                    type='password'
                    value={userInput.password2}
                    onChange={handleChange}
                />
                <span>{userErrors.password2}</span>
            </label>
            <input type='submit' onSubmit={handleSubmit} />
        </form>
    );
};
