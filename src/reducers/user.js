import { ADD_USER } from '../actions/user'


const user = (state = null, action) => {
    switch(action.type) {
        case ADD_USER : 
            return {
                ...state,
                user: action.user
            }
        default: 
            return state
    }
}

export default user