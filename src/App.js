import React from 'react';
import { Route } from 'react-router-dom';
import { Login, SignUp, Game } from './views';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute path='/game' component={Game} redirectURL='/' />
        </div>
    );
}

export default App;
