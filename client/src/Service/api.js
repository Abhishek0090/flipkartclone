import axios from 'axios';

const URL = "http://localhost:8000/api";

export const authenticateSignup = async (data) => {

    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error While Calling Signup api", error.message);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log("Error While Calling Login api", error.message);
        return error.response;
    }
} 