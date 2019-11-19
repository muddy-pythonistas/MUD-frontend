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
            console.log(res) //not sure if/how we get token here
            dispatch({ type: LOGIN_SUCCESS, });
            //window.localStorage.setItem('token', res.data.token);
            //window.localStorage.setItem('user', user.username);
        })
        .catch(err => {
            console.log(err) //do we get an error?
            dispatch({ type: LOGIN_ERROR });
        });
};

export const logout = dispatch => {
    dispatch({ type: LOGOUT });
    //Need to figure out if we are using local storage
    //window.localStorage.setItem('token', '');
    //window.localStorage.setItem('user', '');
};
