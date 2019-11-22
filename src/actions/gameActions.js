import { axiosWithAuth } from '../utils/axiosTypes';

export const START_INIT = 'START_INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_ERROR = 'INIT_ERROR';

export const gameInit = dispatch => {
    dispatch({ type: START_INIT });
    axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            const data = {
                ...res.data,
                local_x: res.data.x_coord,
                local_y: res.data.y_coord,
            };
            dispatch({ type: INIT_SUCCESS, payload: data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: INIT_ERROR, payload: err.response.message });
        });
};

export const START_MOVE = 'START_MOVE';
export const MOVE_SUCCESS = 'MOVE_SUCCESS';
export const MOVE_ERROR = 'MOVE_ERROR';

export const LOCAL_MOVE = 'LOCAL_MOVE';

/* move should be of object type
{
    'direction': ''
}
*/

export const move = (dispatch, move, newRoom) => {
    dispatch({ type: LOCAL_MOVE, payload: { ...move, newRoom } });
    dispatch({ type: START_MOVE });
    axiosWithAuth()
        .post('/api/adv/move/', move)
        .then(res => {
            dispatch({ type: MOVE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            if (err.response) {
                dispatch({ type: MOVE_ERROR, payload: err.response.message });
            }
        });
};

export const UPDATE_LOCAL_COORDS = 'UPDATE_LOCAL_COORDS';

export const START_SET_CHARACTER = 'START_SET_CHARACTER';
export const SET_CHARACTER_SUCCESS = 'SET_CHARACTER_SUCCESS';
export const SET_CHARACTER_ERROR = 'SET_CHARACTER_ERROR';

export const setCharacter = (dispatch, character) => {
    dispatch({
        type: START_SET_CHARACTER,
    });
    axiosWithAuth()
        .post('/api/adv/change_char', character)
        .then(res => {
            dispatch({
                type: SET_CHARACTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log('error', err.response);
            if (err.response) {
                dispatch({
                    type: SET_CHARACTER_ERROR,
                    payload: err.response.message,
                });
            }
        });
};

export const START_SAY = 'START_SAY';
export const SAY_SUCCESS = 'SAY_SUCCESS';
export const SAY_ERROR = 'SAY_ERROR';

/* say should be of object type
{
    'message': ''
}
*/

export const say = (dispatch, say) => {
    dispatch({ type: START_SAY });
    axiosWithAuth()
        .post('/api/adv/say/', say)
        .then(res => {
            dispatch({ type: SAY_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: SAY_ERROR, payload: err.response.message });
        });
};

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (dispatch, message) => {
    dispatch({ type: ADD_MESSAGE, payload: message });
};

export const START_ITEM_CHANGE = 'START_ITEM_CHANGE';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const DROP_ITEM_SUCCESS = 'DROP_ITEM_SUCCESS';
export const DROP_ITEM_ERROR = 'DROP_ITEM_ERROR';

/* item should be of object type
{
    'item': '' <--item's id number
}
*/

export const grabItem = (dispatch, item) => {
    dispatch({ type: START_ITEM_CHANGE });
    axiosWithAuth()
        .post('/api/adv/grab_item/', item)
        .then(res => {
            dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({
                type: ADD_ITEM_ERROR,
                payload: err.response.message,
            });
        });
};

export const dropItem = (dispatch, item) => {
    dispatch({ type: START_ITEM_CHANGE });
    axiosWithAuth()
        .post('/api/adv/drop_item/', item)
        .then(res => {
            dispatch({ type: DROP_ITEM_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: DROP_ITEM_ERROR, payload: err.response.message });
        });
};

export const CHECK_DOOR = 'CHECK_DOOR';

export const checkDoor = dispatch => {
    dispatch({ type: CHECK_DOOR });
};
