import { IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions';

/*
State shape:
login: {
        isLoading: false,
        isLoggedIn: false,
        errorMessage: '',
    },
*/

export const loginReducer = (state, { type, payload }) => {
    switch (type) {
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
