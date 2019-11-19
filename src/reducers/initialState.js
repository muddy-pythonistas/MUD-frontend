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
        roomTitle: '',
        roomDescription: '',
        playersInRoom: [],
        error_msg: '', //comes from the game
        errorMessage: '' //comes from the server
    },
    map: {
        isLoading: false,
        map: [],
        errorMessage: ''
    },
};
