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
        errorMessage: ''
    },
    map: {
        isLoading: false,
        map: [],
        errorMessage: ''
    },
};
