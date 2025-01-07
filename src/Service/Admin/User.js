import { base_url } from "../../utils/base_url";
import axios from "axios";

export const fetchUserOverView = async () => {
    try {
        const response = await axios.get(`${base_url}user/overview` , {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching user overview:", error);
        throw error;
    }
};