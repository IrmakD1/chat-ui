import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as userSelector from './selectors/users'
import * as userActions from './actions/user'
import { Home, Login, Contacts } from './containers'
import { NavBar } from './components/molecules'
import { Error } from './components/organisms'
import './App.css'

class App extends Component {

  handleLogOut = () => {
    console.log('blahhhh');
    const { handleRemoveUser } = this.props

    handleRemoveUser()
  }

  render() {

    const { user } = this.props

    let loggedIn 

    !user ? loggedIn = false : loggedIn = true


    return (
      <div className='App'>
        <Router>
            <Route path='/'>
              <NavBar loggedIn={loggedIn} handleLogOut={this.handleLogOut} />
            </Route>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/*' component={Error}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: userSelector.getUserDetails(state)
})

export default connect(mapStateToProps, userActions)(App)