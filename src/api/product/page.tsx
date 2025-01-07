import axios from "axios";
import { base_url } from "../../utils/base_url";

// Products fetching function
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${base_url}product/`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Error fetching products:", error.message);
        throw error;
    }
};

// Delete product function
export const deleteProducts = async (id) => {
    const token = localStorage.getItem("token"); // Fetch token inside the function
    try {
        const response = await axios.delete(`${base_url}product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const result = response.data;
        return result;
    } catch (error) {
        console.error("Error deleting product:", error.message);
        throw error;
    }
};

// update fetch here 