import { axiosWithAuth } from '../utils/axiosTypes';

export const GET_MAP = 'GET_MAP';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_ERROR = 'MAP_ERROR';

export const getMap = dispatch => {
    dispatch({ type: GET_MAP });
    axiosWithAuth()
        .get('/api/adv/get_map/')
        .then(res => {
            dispatch({ type: MAP_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: MAP_ERROR, payload: err.response });
        });
};

export const GET_OCCUPIED_ROOMS = 'GET_OCCUPIED_ROOMS';
export const OCCUPIED_ROOMS_SUCCESS = 'OCCUPIED_ROOMS_SUCCESS';
export const OCCUPIED_ROOMS_ERROR = 'OCCUPIED_ROOMS_ERROR';

export const getOccupiedRooms = dispatch => {
    dispatch({ type: GET_OCCUPIED_ROOMS });
    axiosWithAuth()
        .get('/api/adv/get_occupied_rooms/')
        .then(res => {
            dispatch({ type: OCCUPIED_ROOMS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({
                type: OCCUPIED_ROOMS_ERROR,
                payload: err.response,
            });
        });
};
