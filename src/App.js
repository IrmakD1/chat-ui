import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login, Contacts } from './containers'
import { NavBar } from './components/molecules'
import './App.css'


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  const switchLogin = () => setLoggedIn(!loggedIn) 

  return (
    <div class='App'>
      <Router>
          <Route path='/'>
            <NavBar loggedIn={loggedIn} handleLogin={switchLogin}/>
          </Route>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/contacts' component={Contacts}/>
        </Switch>
      </Router>
    </div>
  )
}


export default App