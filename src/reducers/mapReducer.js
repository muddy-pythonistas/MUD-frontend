import { GET_MAP, MAP_ERROR, MAP_SUCCESS } from '../actions';

/*
State shape:
map: {
        isLoading: false,
        rooms: [],
        items: [],
        errorMessage: ''
    },
*/

export const mapReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_MAP:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        case MAP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...payload,
                errorMessage: '',
            };
        case MAP_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }
};
