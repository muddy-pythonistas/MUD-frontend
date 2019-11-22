import {
    GET_MAP,
    MAP_ERROR,
    MAP_SUCCESS,
    GET_OCCUPIED_ROOMS,
    OCCUPIED_ROOMS_SUCCESS,
    OCCUPIED_ROOMS_ERROR,
} from '../actions';

/*
State shape:
map: {
        isLoading: false,
        rooms: [],
        items: [],
        occupied_rooms: [],
        errorMessage: ''
    },
*/

export const mapReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_MAP:
        case GET_OCCUPIED_ROOMS:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        case MAP_SUCCESS:
        case OCCUPIED_ROOMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...payload,
                errorMessage: '',
            };
        case MAP_ERROR:
        case OCCUPIED_ROOMS_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        default:
            return state;
    }
};
