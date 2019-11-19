import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
        baseURL: 'https://lambda-mud-test.herokuapp.com/',
    });
};

export const axiosInstance = () => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        baseURL: 'https://lambda-mud-test.herokuapp.com/',
    });
};
