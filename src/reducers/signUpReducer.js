import {
    IS_SIGNING_UP,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../actions';

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
                errorMessage: {...payload},
            };
        default:
            return state;
    }
};
