import {
  START_INIT,
  INIT_SUCCESS,
  INIT_ERROR,
  START_MOVE,
  MOVE_SUCCESS,
  MOVE_ERROR,
  UPDATE_LOCAL_COORDS,
  LOCAL_MOVE,
  START_SAY,
  SAY_SUCCESS,
  SAY_ERROR
} from '../actions';

/*
State shape:
game: {
    isLoading: false,
    uuid: '',
    name: '',
    x_coord: '',
    y_coord: '',
    title: '',
    description: '',
    players: [],
    error_msg: '',
    errorMessage: ''
    message: ''
}
*/

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case LOCAL_MOVE:
      return {
        ...state,
        lastMovedDirection: payload.direction,
        curr_room: payload.newRoom
      };
    case UPDATE_LOCAL_COORDS:
      return {
        ...state,
        local_x: payload.x_coord,
        local_y: payload.y_coord
      };
    case START_INIT:
    case START_MOVE:
    case START_SAY:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case SAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case INIT_ERROR:
    case MOVE_ERROR:
    case SAY_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};
