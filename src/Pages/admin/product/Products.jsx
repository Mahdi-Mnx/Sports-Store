import useSWR from "swr";
import { deleteProducts, fetchProducts } from "../../../api/product/page";
import { Edit, Trash } from "lucide-react"; // Import Lucide icons
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const { data: products, error, isLoading, mutate } = useSWR("fetchProducts", fetchProducts);

    // Loading state
    if (isLoading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    // Error state
    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
    }

    // Handle delete product
    const handleDelete = async (productId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            try {
                // Call the deleteProducts function
                await deleteProducts(productId);
                console.log("Product deleted successfully");

                // Revalidate the data to refresh the product list
                mutate();
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Failed to delete product. Please try again.");
            }
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Products</h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products?.map((product) => {
                    // Safely handle the colors field
                    let colorsArray = [];
                    if (typeof product.colors === "string") {
                        // If colors is a string, split it into an array
                        colorsArray = product.colors.split(" ");
                    } else if (Array.isArray(product.colors)) {
                        // If colors is an array of objects, extract the color titles
                        colorsArray = product.colors.map((color) => color.title);
                    }

                    return (
                        <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                            {/* Product Images Carousel */}
                            <div className="relative h-48 overflow-hidden">
                                {product.images.slice(0, 5).map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.url} // Use image.url for Cloudinary or other hosted images
                                        alt={`Product ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                                    />
                                ))}
                            </div>

                            {/* Product Details */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                <p className="text-sm text-gray-600">{product.brand}</p>
                                <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
                                <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                                {/* Product Colors */}
                                <div className="flex space-x-2 mt-4">
                                    {colorsArray.map((color, index) => (
                                        <div
                                            key={index} // Use index as the key
                                            className="w-6 h-6 rounded-full border border-gray-200"
                                            style={{ backgroundColor: color.toLowerCase() }} // Use color for background color
                                            title={color} // Use color for the tooltip
                                        ></div>
                                    ))}
                                </div>

                                {/* Product Categories */}
                                <div className="mt-4">
                                    <span className="text-sm text-gray-600">Categories: </span>
                                    <span className="text-sm text-gray-800">
                                        {product.categories}
                                    </span>
                                </div>

                                {/* Product Type */}
                                <div className="mt-2">
                                    <span className="text-sm text-gray-600">Type: </span>
                                    <span className="text-sm text-gray-800">{product.type}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2 mt-4">
                                    <button
                                        onClick={() => navigate(product._id)}
                                        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                        title="Update"
                                    >
                                        <Edit className="w-4 h-4" /> {/* Update icon */}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash className="w-4 h-4" /> {/* Delete icon */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;