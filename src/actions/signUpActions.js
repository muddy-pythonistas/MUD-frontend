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
    axiosInstance()
        .post('/api/registration/', user)
        .then(res => {
            localStorage.setItem('token', res.data.key);
            dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch(err => {
            console.log('error', err); //not sure what type of error we get
            dispatch({ type: SIGNUP_ERROR });
        });
};
