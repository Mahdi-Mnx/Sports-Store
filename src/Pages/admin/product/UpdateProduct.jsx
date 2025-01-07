import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../utils/base_url";
import { Trash } from "lucide-react"; // Import Trash icon

const UpdateProduct = () => {
    const { id } = useParams(); // Get the product ID from the route parameters
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        categories: "",
        colors: "", // Change to string
        price: 0,
        type: "",
        description: "",
        images: [],
    });
    const [newImages, setNewImages] = useState([]); // State for new images to upload
    const [error, setError] = useState(""); // State for error messages

    // Fetch product details based on ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${base_url}product/${id}`);
                setProduct(response.data);
                setFormData({
                    name: response.data.name,
                    brand: response.data.brand,
                    categories: response.data.categories,
                    colors: response.data.colors, // Already a string
                    price: response.data.price,
                    type: response.data.type,
                    description: response.data.description,
                    images: response.data.images,
                });
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Failed to fetch product details. Please try again.");
            }
        };

        fetchProduct();
    }, [id]);

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

        // Check if the total number of images (existing + new) exceeds the limit
        if (formData.images.length + newImages.length + files.length > 5) {
            setError("You can upload a maximum of 5 images.");
            return;
        }

        // Append new files to the existing newImages array
        setNewImages((prevNewImages) => [...prevNewImages, ...files]);
    };

    // Handle deletion of existing images
    const handleDeleteImage = async (imageId) => {
        try {
            const token = localStorage.getItem("token");

            // Send DELETE request to the backend
            const response = await axios.delete(`${base_url}product/${id}/images/${imageId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Image deleted:", response.data);
            alert("Image deleted successfully!");

            // Refresh the product data
            const updatedProduct = await axios.get(`${base_url}product/${id}`);
            setFormData({
                ...formData,
                images: updatedProduct.data.images,
            });
        } catch (error) {
            console.error("Error deleting image:", error);
            alert("Failed to delete image. Please try again.");
        }
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

        // Validate images
        if (formData.images.length + newImages.length < 1) {
            setError("You must upload at least 1 image.");
            return;
        }

        // Check if the total number of images exceeds the limit
        if (formData.images.length + newImages.length > 5) {
            setError("You can upload a maximum of 5 images.");
            return;
        }

        try {
            // Create FormData to send files to the backend
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("brand", formData.brand);
            formDataToSend.append("categories", formData.categories);
            formDataToSend.append("colors", formData.colors); // Send as string
            formDataToSend.append("price", formData.price);
            formDataToSend.append("type", formData.type);
            formDataToSend.append("description", formData.description);

            // Append only new files
            newImages.forEach((file) => {
                formDataToSend.append("images", file);
            });

            // Send PUT request to update the product
            const response = await axios.put(`${base_url}product/${id}`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Product updated:", response.data);
            alert("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product:", error);
            setError(error.response?.data?.message || "Failed to update product. Please try again.");
        }
    };

    if (!product) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Update Product</h1>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {/* Update Product Form */}
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
                        {formData.images.length + newImages.length} / 5 images uploaded
                    </p>
                </div>

                {/* Display Existing Images */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Existing Images</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image.url} // Use image.url for Cloudinary images
                                    alt={`Product Image ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleDeleteImage(image._id)} // Pass the image ID
                                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Trash className="w-4 h-4" /> {/* Trash icon */}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Display Newly Selected Images */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Newly Selected Images</label>
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
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;