import React from 'react';
import { Route } from 'react-router-dom';
import { Login,SignUp } from './views';

function App() {
    return (
        <div className='App'>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
        </div>
    );
}

export default App;
