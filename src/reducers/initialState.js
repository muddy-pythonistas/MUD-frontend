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
        description: '',
        players: [],
        error_msg: '', //comes from the game
        errorMessage: '', //comes from the server
        message: '' //sent by player
    },
    map: {
        isLoading: false,
        rooms: [],
        errorMessage: ''
    },
};
