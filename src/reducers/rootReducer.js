import { loginReducer, signUpReducer, gameReducer, mapReducer } from './index';

export const rootReducer = ({ loginState, signUpState, game, map }, action) => ({
    //newSomeState: someStateReducer(oldSomeState, action)
    loginState: loginReducer(loginState, action),
    signUpState: signUpReducer(signUpState, action),
    game: gameReducer(game, action),
    map: mapReducer(map, action),
});
