import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
        baseURL: 'https://mud-cs23-backend.herokuapp.com/',
    });
};

export const axiosInstance = () => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        baseURL: 'https://mud-cs23-backend.herokuapp.com/',
    });
};
