import { fetchUserDetails } from "../service"

export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'


export const addUser = (userDetails) => ({
    type: ADD_USER,
    user: userDetails
})

export const removeUser = () => ({
    type: REMOVE_USER
})


export const handleAddUser = (loginDetails) => async (dispatch) => {
    try {
        const userDetails = await fetchUserDetails(loginDetails)

        dispatch(addUser(userDetails))

    } catch (err) {
        //Fire off Error action Handler
        console.log("Boooooooo there was an error: ", err);
    }
}

export const handleRemoveUser = () => (dispatch) => {

}
