import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/user'
import * as userSelectors from '../selectors/users'
import { LoginForm } from '../components/molecules'
import './styles.css'


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event, type) => {
        this.setState(() => ({
            [`${type}`]: event.target.value
        }))
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { username, password } = this.state
        const { history, handleAddUser } = this.props

        await handleAddUser({ username, password })

        this.setState(() => ({
            username: '',
            password: ''
        }))

        const { user } = this.props

        if(user) history.push('/')
    }

    render() {

        const { handleAddUser } = this.props
        const { username, password } = this.state

        return (
            <div className='page-body'>
                <LoginForm 
                    title='Login to Start Chatting' 
                    handleAddUser={handleAddUser}
                    handleChange={this.handleChange}
                    username={username}
                    password={password}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    user: userSelectors.getUserDetails(state)
})

export default connect(mapStateToProps, userActions)(Login)