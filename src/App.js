import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './views';

function App() {
    return (
        <div className='App'>
            <Route exact to='login' component={Login} />
        </div>
    );
}

export default App;
