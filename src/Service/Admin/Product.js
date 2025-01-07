import { base_url } from "../../utils/base_url";
import axios from "axios";

export const fetchProductOverView = async () => {
    try {
        const response = await axios.get(`${base_url}product/overview` , {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching product overview:", error);
        throw error;
    }
};