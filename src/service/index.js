import axios from "axios"; 

export const fetchUserDetails = async (loginDetails) => {
    const { userName, password } = loginDetails

    console.log('process.env.CHAT_SERVICE_URL: ', process.env.CHAT_SERVICE_URL)

    //need to use the UAM service to return user
    const url = `${process.env.CHAT_SERVICE_URL}/user/4844f9cd-897c-444a-9ca8-7dd057d4a906`
    const { data } = await axios.get(url)
    return data
}