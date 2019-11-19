import { axiosWithAuth } from '../utils/axiosTypes';

export const GET_MAP = 'GET_MAP';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_ERROR = 'MAP_ERROR';

export const gameInit = dispatch => {
    dispatch({ type: GET_MAP });
    axiosWithAuth()
        .get('/api/adv/room/')
        .then(res => {
            console.log(res); //need to see how the data comes back
            dispatch({ type: MAP_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log('error', err.response);
            dispatch({ type: MAP_ERROR, payload: err.response.message });
        });
};
