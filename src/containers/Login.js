import React, { Component } from 'react'
import { LoginForm } from '../components/molecules'
import './styles.css'


class Login extends Component {
    render() {
        return (
            <div className='page-body'>
                <LoginForm title='Login to Start Chatting'/>
            </div>
        )
    } 
}

export default Login