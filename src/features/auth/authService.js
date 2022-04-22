import axios from "axios";

const API_URL = 'http://localhost:5001/api/users/';

//Register
const register = async(user) => {

    const response = await axios.post(API_URL, user);

    if(response.data) {
         localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

//Login
const login = async(user) => {

    const response = await axios.post(API_URL + 'login', user);

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

//Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService;