import axios from 'axios';

const URL = "http://localhost:8000/api"

export const authenticateSignup = async (data) => {

    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error While Calling Signup api", error.message);
    }
}