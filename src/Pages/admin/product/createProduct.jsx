import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../utils/base_url";
import { Trash } from "lucide-react"; // Import Trash icon

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        categories: "", // Ensure categories is included
        colors: "", // Colors as a space-separated string
        price: 0,
        type: "",
        description: "",
        images: [],
    });
    const [newImages, setNewImages] = useState([]); // State for new images to upload
    const [error, setError] = useState(""); // State for error messages
    const navigate = useNavigate();

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

        // Check if the total number of images exceeds the limit
        if (newImages.length + files.length > 5) {
            setError("You can upload a maximum of 5 images.");
            return;
        }

        // Append new files to the existing newImages array
        setNewImages((prevNewImages) => [...prevNewImages, ...files]);
    };

    // Handle deletion of newly selected images
    const handleDeleteNewImage = (index) => {
        const updatedNewImages = newImages.filter((_, i) => i !== index);
        setNewImages(updatedNewImages);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        // Validate required fields
        if (!formData.categories) {
            setError("Categories is required.");
            return;
        }

        // Validate images
        if (newImages.length < 1) {
            setError("You must upload at least 1 image.");
            return;
        }

        try {
            // Create FormData to send files to the backend
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("brand", formData.brand);
            formDataToSend.append("categories", formData.categories); // Ensure categories is included
            formDataToSend.append("colors", formData.colors); // Send as string
            formDataToSend.append("price", formData.price);
            formDataToSend.append("type", formData.type);
            formDataToSend.append("description", formData.description);

            // Append only new files
            newImages.forEach((file) => {
                formDataToSend.append("images", file);
            });

            // Send POST request to create the product
            const response = await axios.post(`${base_url}product/new`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Product created:", response.data);
            alert("Product created successfully!");

            // Reset the form after successful submission
            setFormData({
                name: "",
                brand: "",
                categories: "",
                colors: "",
                price: 0,
                type: "",
                description: "",
                images: [],
            });
            setNewImages([]);

            // Navigate to the products list page
            navigate("/admin/products");
        } catch (error) {
            console.error("Error creating product:", error);
            setError(error.response?.data?.message || "Failed to create product. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Create Product</h1>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {/* Create Product Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Brand */}
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Categories */}
                <div className="mb-4">
                    <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                        Categories
                    </label>
                    <input
                        type="text"
                        id="categories"
                        name="categories"
                        value={formData.categories}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Type */}
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Colors Input */}
                <div className="mb-4">
                    <label htmlFor="colors" className="block text-sm font-medium text-gray-700">
                        Colors (Separate with spaces)
                    </label>
                    <input
                        type="text"
                        id="colors"
                        name="colors"
                        value={formData.colors}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Red Blue Green"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                        Upload Images (1-5)
                    </label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        onChange={handleImageUpload}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        accept="image/*"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                        {newImages.length} / 5 images uploaded
                    </p>
                </div>

                {/* Display Newly Selected Images */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Selected Images</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {newImages.map((file, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(file)} // Create a URL for the new image
                                    alt={`New Image ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleDeleteNewImage(index)} // Pass the index
                                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Trash className="w-4 h-4" /> {/* Trash icon */}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;