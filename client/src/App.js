import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import AddFriend from './components/AddFriend'
import Navigation from './components/Navigation'

function App() {
    
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <PrivateRoute path='/friends' component={ Friends } />
        <PrivateRoute path='/addfriend' component={ AddFriend } />
        <Route path='/login' component={ Login } />
        <Route component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
