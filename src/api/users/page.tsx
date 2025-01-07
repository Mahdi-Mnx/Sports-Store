import { base_url } from "../../utils/base_url";
import axios from "axios";

// user fetching function
const token = localStorage.getItem("token");
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${base_url}user/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Login error: ", error.message);
        throw error;
    }
};


export const fetchUser = async (id) => {
    try {
        const response = await axios.get(`${base_url}user/${id}`, {
            headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
};