import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userSelectors from '../selectors/users'


console.log('Whooooooooooooo!');
console.log(process.env.CHAT_SERVICE_URL);

class Home extends Component { 

    componentDidMount() {
        const { user, history } = this.props

        if(!user) {
            history.push('/login')
        }
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: userSelectors.getUserDetails(state)
})

export default connect(mapStateToProps)(Home)