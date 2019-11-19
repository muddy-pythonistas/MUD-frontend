import React, { useState } from 'react';

export const SignUpForm = () => {
    const [userInput, setUserInput] = useState({
        username: '',
        passOne: '',
        passTwo: '',
    });

    const [userErrors, setUserErrors] = useState({
        username: '',
        passOne: '',
        passTwo: '',
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
        }
    };

    const validateData = () => {
        requiredFields();
        checkPasswords()
        let errorsPresent = checkForErrors()
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
    };

    const checkPasswords = () => {
        let passTest = /^(?=.*\d).{8}/.test(userInput.passOne);
        if (!passTest) {
            setUserErrors(prevState => ({
                ...prevState,
                passOne:
                    'Password must be at least 8 characters with one number.',
            }));
            setUserInput(prevState => ({
                ...prevState,
                passOne: '',
                passTwo: '',
            }));
        }

        if (userInput.passOne !== userInput.passTwo) {
            setUserErrors(prevState => ({
                ...prevState,
                passTwo: 'Your passwords must match. Please try again.',
            }));
            setUserInput(prevState => ({
                ...prevState,
                passOne: '',
                passTwo: '',
            }));
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
            <label>
                Confirm Password:
                <input
                    name='passTwo'
                    type='password'
                    value={userInput.passTwo}
                    onChange={handleChange}
                />
                <span>{userErrors.passTwo}</span>
            </label>
            <input type='submit' onSubmit={handleSubmit} />
        </form>
    );
};
