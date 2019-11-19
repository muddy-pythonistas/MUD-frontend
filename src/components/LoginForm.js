import React, { useState } from 'react';
import {login} from '../actions'
import {useStateValue} from '../hooks/useStateValue'

export const LoginForm = () => {
    const [,dispatch] = useStateValue()

    const [userInput, setUserInput] = useState({
        username: '',
        passOne: '',
    });

    const [userErrors, setUserErrors] = useState({
        username: '',
        passOne: '',
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
            login(dispatch, userInput)
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
                    name='passOne'
                    type='password'
                    value={userInput.passOne}
                    onChange={handleChange}
                />
                <span>{userErrors.passOne}</span>
            </label>
            <input type='submit' onSubmit={handleSubmit} />
        </form>
    );
};
