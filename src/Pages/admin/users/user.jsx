import useSWR, { mutate } from "swr";
import { Edit, Plus, Trash } from "lucide-react"; // Import Lucide icons
import { fetchUsers } from "../../../api/users/page"; // Import your fetchUsers function
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../utils/base_url";
const User = () => {

    const navigate = useNavigate();

    // Use SWR to fetch users
    const { data: users, error, isLoading } = useSWR("/api/users", fetchUsers);

     // Handle delete user
     const handleDelete = async (userId) => {
        const token = localStorage.getItem("token");
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            try {
                await axios.delete(`${base_url}user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("User deleted successfully");
                 // Refetch the user list after deletion
                mutate("/api/users"); // This will trigger a refetch of the users

                // Optionally, you can provide feedback on success:
                alert("User deleted successfully!")
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user. Please try again.");
            }
        }
    };
    

    // Skeleton Loading Component
    const SkeletonRow = () => (
        <tr className="animate-pulse">
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
            </td>
        </tr>
    );

    return (
        <div className="container mx-auto p-4 relative">
              {/* New User Button */}
              <button
                onClick={() => navigate("/admin/users/new")}
                className="absolute right-4 top-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                <Plus className="w-5 h-5 mr-2" /> {/* Plus icon */}
                New User
            </button>

            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Username</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Role</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Created At</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Updated At</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {isLoading ? (
                        // Show skeleton loading while data is being fetched
                        Array.from({ length: 5 }).map((_, index) => <SkeletonRow key={index} />)
                    ) : error ? (
                        // Show error message if fetching fails
                        <tr>
                            <td colSpan="6" className="py-3 px-4 text-sm text-center text-red-500">
                                Failed to load data. Please try again.
                            </td>
                        </tr>
                    ) : (
                        // Render actual data
                        users?.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4 text-sm text-gray-700">{user.username}</td>
                                <td className="py-3 px-4 text-sm text-gray-700">{user.email}</td>
                                <td className="py-3 px-4 text-sm">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            user.role === "admin"
                                                ? "bg-blue-100 text-blue-800"
                                                : user.role === "moderator"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-gray-700">{new Date(user.createdAt).toLocaleString()}</td>
                                <td className="py-3 px-4 text-sm text-gray-700">{new Date(user.updatedAt).toLocaleString()}</td>
                                <td className="py-3 px-4 text-sm text-gray-700">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => navigate(`/admin/users/${user._id}`)}
                                            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                            title="Update"
                                        >
                                            <Edit className="w-4 h-4" /> {/* Update icon */}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash className="w-4 h-4" /> {/* Delete icon */}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default User;