import { IS_SIGNING_UP, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_ERRORS } from '../actions';

/*
State shape:
signUp:{
        isLoading: false,
        isSignedUp: false,
        errorMessage: {}
    },
*/

export const signUpReducer = (state, { type, payload }) => {
    switch (type) {
        case IS_SIGNING_UP:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedUp: true,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: { ...payload },
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errorMessage: {},
            };
        default:
            return state;
    }
};
