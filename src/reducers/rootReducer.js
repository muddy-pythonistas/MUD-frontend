import { loginReducer, signUpReducer, gameReducer, mapReducer } from './index';

export const rootReducer = ({ login, signUp, game, map }, action) => ({
    //newSomeState: someStateReducer(oldSomeState, action)
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action),
    game: gameReducer(game, action),
    map: mapReducer(map, action),
});
