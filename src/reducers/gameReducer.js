import {
  START_INIT,
  INIT_SUCCESS,
  INIT_ERROR,
  START_MOVE,
  MOVE_SUCCESS,
  MOVE_ERROR,
  LOCAL_MOVE,
  START_SAY,
  SAY_SUCCESS,
  SAY_ERROR,
  START_SET_CHARACTER,
  SET_CHARACTER_SUCCESS,
  SET_CHARACTER_ERROR,
  ADD_MESSAGE
} from '../actions';

/*
State shape:
game: {
    isLoading: false,
    uuid: '',
    name: '',
    title: '',
    x_coord: '',
    y_coord: '',
    local_x: '',
    local_y: '',
    description: '',
    players: [],
    error_msg: '', //comes from the game
    errorMessage: '', //comes from the server
    message: '', //sent by player
    curr_room: 0,
    lastMovedDirection: 's'
  },
*/

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case LOCAL_MOVE:
        let direction = payload.direction
        let change = {
            n: { local_x: 0, local_y: -1 },
            s: { local_x: 0, local_y: 1 },
            e: { local_x: 1, local_y: 0 },
            w: { local_x: -1, local_y: 0 },
        }
      return {
        ...state,
        lastMovedDirection: payload.direction,
        curr_room: payload.newRoom,
        local_x: state.local_x + change[direction].local_x,
        local_y: state.local_y + change[direction].local_y,
      };
    case START_INIT:
    case START_MOVE:
    case START_SAY:
    case START_SET_CHARACTER:
      return {
        ...state,
        ...payload,
        isLoading: true,
        errorMessage: ''
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case SAY_SUCCESS:
    case SET_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case SAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case INIT_ERROR:
    case MOVE_ERROR:
    case SAY_ERROR:
    case SET_CHARACTER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]  
      }
    default:
      return state;
  }
};
