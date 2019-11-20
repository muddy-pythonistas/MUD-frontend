import { axiosInstance } from '../utils/axiosTypes';

export const IS_SIGNING_UP = 'IS_SIGNING_UP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

/*user should be of object type 
{
    'username': '',
    'password1': '',
    'password2': ''
}
*/

export const signUp = (dispatch, user) => {
    dispatch({ type: IS_SIGNING_UP });
    return axiosInstance()
        .post('/api/registration/', user)
        .then(res => {
            localStorage.setItem('token', res.data.key);
            dispatch({ type: SIGNUP_SUCCESS });
            return true
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: SIGNUP_ERROR, payload: err.response.data });
        });
};

export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const clearErrors = (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}