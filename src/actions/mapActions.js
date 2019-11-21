import { axiosWithAuth } from '../utils/axiosTypes';

export const GET_MAP = 'GET_MAP';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_ERROR = 'MAP_ERROR';

export const getMap = dispatch => {
  dispatch({ type: GET_MAP });
  axiosWithAuth()
    .get('/api/adv/get_map/')
    .then(res => {
      let rooms = res.data.rooms;
      dispatch({ type: MAP_SUCCESS, payload: rooms });
    })
    .catch(err => {
      dispatch({ type: MAP_ERROR, payload: err });
    });
};
