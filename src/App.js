import React from 'react';
import { Route } from 'react-router-dom';
import { Login, SignUp, Game, Character, About } from './views';
import { PrivateRoute } from './utils/PrivateRoute';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/about' component={About} />
      <PrivateRoute path='/character' component={Character} redirectURL='/' />
      <PrivateRoute path='/game' component={Game} redirectURL='/' />
    </div>
  );
}

export default App;
