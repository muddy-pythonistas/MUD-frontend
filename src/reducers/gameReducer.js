import {
    START_INIT,
    INIT_SUCCESS,
    INIT_ERROR,
    START_MOVE,
    MOVE_SUCCESS,
    MOVE_ERROR,
    START_SAY,
    SAY_SUCCESS,
    SAY_ERROR,
} from '../actions';

/*
State shape:
game: {
    isLoading: false,
    uuid: '',
    name: '',
    roomTitle: '',
    roomDescription: '',
    playersInRoom: [],
    errorMessage: ''
}
*/

export const gameReducer = (state, { type, payload }) => {
    switch (type) {
        case START_INIT:
            return {
                ...state,
            };
        case INIT_SUCCESS:
            return {
                ...state,
            };
        case INIT_ERROR:
            return {
                ...state,
            };
        case START_MOVE:
            return {
                ...state,
            };
        case MOVE_SUCCESS:
            return {
                ...state,
            };
        case MOVE_ERROR:
            return {
                ...state,
            };
        case START_SAY:
            return {
                ...state,
            };
        case SAY_SUCCESS:
            return {
                ...state,
            };
        case SAY_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    }
};
