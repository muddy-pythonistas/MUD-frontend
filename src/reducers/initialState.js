export const initialState = {
  loginState: {
    isLoading: false,
    isLoggedIn: false,
    errorMessage: {}
  },
  signUpState: {
    isLoading: false,
    isSignedUp: false,
    errorMessage: {}
  },
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
    messages: [], //sent by player
    curr_room: 0,
    lastMovedDirection: 's',
    items: []
  },
  map: {
    isLoading: false,
    rooms: [],
    items: [],
    errorMessage: ''
  }
};
