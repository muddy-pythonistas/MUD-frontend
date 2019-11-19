import React from 'react';
import { Route } from 'react-router-dom';
import { Login,SignUp } from './views';

function App() {
    return (
        <div className='App'>
            <Route exact to='/login' component={Login} />
            <Route exact to='/signup' component={SignUp} />
        </div>
    );
}

export default App;
