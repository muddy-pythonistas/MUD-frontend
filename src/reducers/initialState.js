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
        description: '',
        players: [],
        error_msg: '', //comes from the game
        errorMessage: '', //comes from the server
        message: '', //sent by player
        direction: '' //used to keep track of player image
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
