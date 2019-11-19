import { axiosInstance } from '../utils/axiosTypes';

export const IS_SIGNING_UP = 'IS_SIGNING_UP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_OVER = 'SIGNUP_OVER';

/*user should be of object type 
{
    'username': '',
    'password1': '',
    'password2': ''
}
*/

export const signUpAction = (dispatch, user) => {
    dispatch({ type: IS_SIGNING_UP });
    axiosInstance()
        .post('/api/registration', user)
        .then(res => {
            console.log(res); //need to see how token comes back
            dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch(err => {
            console.log(err); //not sure what type of error we get
            dispatch({ type: SIGNUP_ERROR });
        });
};
