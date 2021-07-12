import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/user'
import { LoginForm } from '../components/molecules'
import './styles.css'


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event, type) => {
        console.log('handleChange type: ', type)
        this.setState(() => ({
            [`${type}`]: event.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { username, password } = this.state
        const { handleAddUser } = this.props

        handleAddUser({ username, password })

        this.setState = (() => ({
            username: '',
            password: ''
        }))
    }

    render() {

        const { handleAddUser } = this.props
        const { username, password } = this.state

        console.log('Login form state: ', this.state)

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

})

export default connect(mapStateToProps, userActions)(Login)