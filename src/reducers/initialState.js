export const initialState = {
  login: {
    isLoading: false,
    isLoggedIn: false,
    errorMessage: ''
  },
  signUp: {
    isLoading: false,
    isSignedUp: false,
    errorMessage: ''
  },
  game: {
    isLoading: false,
    uuid: '',
    name: '',
    title: '',
    description: '',
    players: [],
    error_msg: '', //comes from the game
    errorMessage: '' //comes from the server
  },
  map: {
    isLoading: false,
    rooms: [],
    errorMessage: ''
  },
  player: {
    currentRoom: 0,
    lastMovedDirection: 's'
  }
};
