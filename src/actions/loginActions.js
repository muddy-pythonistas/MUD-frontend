import { axiosInstance } from '../utils/axiosTypes';

export const IS_LOGGING_IN = 'IS_LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

/*
user should be of object type {
    'username' : '',
    'password' : ''
}
*/

export const login = (dispatch, user) => {
    dispatch({ type: IS_LOGGING_IN });
    return axiosInstance()
        .post('/api/login/', user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS });
            localStorage.setItem('token', res.data.key);
            return true
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: LOGIN_ERROR, payload: err.response.data });
        });
};

export const logout = dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.setItem('token', '');
};
