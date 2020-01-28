import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import { UserContext } from './contexts/UserContext'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import AddFriend from './components/AddFriend'
import Navigation from './components/Navigation'

function App() {

  const [user, updateUser] = useState({})

  return (
    <div className="App">
      <UserContext.Provider value={{ user, updateUser }}>
        <Navigation user={ user } />
        <Switch>
          <PrivateRoute path='/friends' component={ Friends } user={ user } />
          <PrivateRoute path='/add' component={ AddFriend } user={ user } />
          <Route path='/login' component={ Login } updateUser={ updateUser } />
          <Route component={ Login } updateUser={ updateUser } />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
