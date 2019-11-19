import { axiosWithAuth } from '../utils/axiosTypes';

export const START_INIT = 'START_INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_ERROR = 'INIT_ERROR';

export const gameInit = dispatch => {
    dispatch({ type: START_INIT });
    axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            dispatch({ type: INIT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: INIT_ERROR, payload: err.response.message });
        });
};

export const START_MOVE = 'START_MOVE';
export const MOVE_SUCCESS = 'MOVE_SUCCESS';
export const MOVE_ERROR = 'MOVE_ERROR';

/* move should be of object type
{
    'direction': ''
}
*/

export const move = (dispatch, move) => {
    dispatch({ type: START_MOVE });
    axiosWithAuth()
        .post('/api/adv/move/', move)
        .then(res => {
            dispatch({ type: MOVE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: MOVE_ERROR, payload: err.response.message });
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
