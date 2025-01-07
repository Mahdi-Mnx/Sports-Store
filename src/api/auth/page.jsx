import { base_url } from "../../utils/base_url";
import axios from "axios";

// login fetching function
export const fetchLogin = async (data) => {
    try {
        const response = await axios.post(`${base_url}user/login`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = response.data;
        console.log("result: ", result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
        return result;
    } catch (error) {
        console.error("Login error: ", error.message);
        throw error;
    }
};



// register fetching function
export const fetchRegister = async (data) => {
    try {
        const response = await axios.post(`${base_url}user/create`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = response.data;
        console.log("result: ", result);
        return result;
    } catch (error) {
        console.error("Register error: ", error.message);
        throw error;
    }
};