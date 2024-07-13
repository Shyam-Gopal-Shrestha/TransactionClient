import axios from "axios";

// server url
const API_BASE_URL = "http://localhost:8000"
const userEndpoint = "/api/user"

const API_URL = API_BASE_URL + userEndpoint

// Signup | user registration | create | post
export const createUser = (userObj) => {
    const response = axios.post(`${API_URL}/signup`, userObj)
                            .then(res => res.data)
                            .catch(error => console.log(error))
    return response
}

// login | POST
export const loginUser = (userObj) => {
    const response = axios.post(`${API_URL}/login`, userObj)
                            .then(res => res.data)
                            .catch(error => console.log(error))
return response
}