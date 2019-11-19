import { axiosWithAuth } from '../utils/axiosTypes';

export const GET_MAP = 'GET_MAP';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_ERROR = 'MAP_ERROR';

export const getMap = dispatch => {
    dispatch({ type: GET_MAP });
    axiosWithAuth()
        .get('/api/adv/rooms/')
        .then(res => {
            let rooms = JSON.parse(res.data.rooms)
            dispatch({ type: MAP_SUCCESS, payload: rooms });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: MAP_ERROR, payload: err.response.message });
        });
};
