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
    axiosInstance()
        .post('/api/login/', user)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS });
            localStorage.setItem('token', res.data.key);
        })
        .catch(err => {
            console.log(err) //do we get an error?
            dispatch({ type: LOGIN_ERROR });
        });
};

export const logout = dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.setItem('token', '');
};
