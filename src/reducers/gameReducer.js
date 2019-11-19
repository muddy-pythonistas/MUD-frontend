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
    error_msg: '',
    errorMessage: ''
}
*/

export const gameReducer = (state, { type, payload }) => {
    switch (type) {
        case START_INIT, START_MOVE, START_SAY:
            return {
                ...state,
                isLoading: true,
                errorMessage: ''
            };
        case INIT_SUCCESS, MOVE_SUCCESS, SAY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...payload
            };
        case INIT_ERROR, MOVE_ERROR, SAY_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        default:
            return state;
    }
};
