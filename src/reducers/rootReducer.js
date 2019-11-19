import {loginReducer, signUpReducer} from './index'

export const rootReducer = ({ login, signUp }, action) => ({
    //newSomeState: someStateReducer(oldSomeState, action)
    login: loginReducer(login, action),
    signUp: signUpReducer(signUp, action)
});
