import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { FaUsers, FaBoxOpen } from 'react-icons/fa';
import { fetchUserOverView } from '../../Service/Admin/User';
import useSWR from 'swr';
import { fetchProductOverView } from '../../Service/Admin/Product';
import { fetchUsers } from '../../api/users/page';

const DashboardHome = () => {
    const productData = [
        { name: 'Product 1', quantity: 100 },
        { name: 'Product 2', quantity: 200 },
        { name: 'Product 3', quantity: 150 },
        { name: 'Product 4', quantity: 80 },
        { name: 'Product 5', quantity: 120 },
    ];

    const totalProducts = productData.reduce((acc, curr) => acc + curr.quantity, 0);

    // Use SWR to fetch users
    const { data: users, error: usersError, isLoading: usersLoading } = useSWR("/api/users", fetchUsers);

    // Use SWR to fetch user overview data
    const { data: userOverview, error: userOverviewError, isLoading: userOverviewLoading } = useSWR("userOverview", fetchUserOverView);

    // Use SWR to fetch product overview data
    const { data: productsOverview, error: productsError, isLoading: productsLoading } = useSWR("productsOverview", fetchProductOverView);

    // Loading state for all data
    if (usersLoading || userOverviewLoading || productsLoading) {
        return <div>Loading...</div>;
    }

    // Error state for all data
    if (usersError || userOverviewError || productsError) {
        return <div>Error: {usersError?.message || userOverviewError?.message || productsError?.message}</div>;
    }

    // Transform user overview data for the chart
    const transformData = (data) => {
        return data.map((item) => ({
            year: `${new Date(item.year, item.month - 1).toLocaleString('default', { month: 'short' })} ${item.year}`,
            users: item.count,
        }));
    };

    const chartData = transformData(userOverview);

    // Transform product overview data for the radar chart
    const transformProductsData = (data) => {
        return data.map((item) => ({
            category: item.category.toString(),
            value: item.count,
        }));
    };

    const productsChartData = transformProductsData(productsOverview);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

            {/* Total Users and Products Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Total Users Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <FaUsers className="text-blue-500 text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
                            <p className="text-2xl font-bold text-gray-900">{users?.length || 0}</p>
                        </div>
                    </div>
                </div>

                {/* Total Products Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 rounded-full">
                            <FaBoxOpen className="text-green-500 text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
                            <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Overview Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Users Overview</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                            <XAxis dataKey="year" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                                cursor={{ fill: '#f0f0f0' }}
                            />
                            <Legend />
                            <Bar dataKey="users" fill="#8884d8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Products Overview Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products Overview</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {productsChartData.length > 0 ? (
                     <ResponsiveContainer width="100%" height={400}>
                     <RadarChart cx="50%" cy="50%" outerRadius="80%" data={productsChartData}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="category" />
                         <PolarRadiusAxis />
                         <Tooltip
                             contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                         />
                         <Legend />
                         <Radar
                             name="category"
                             dataKey="value"
                             stroke="#8884d8"
                             fill="#8884d8"
                             fillOpacity={0.6}
                         />
                     </RadarChart>
                 </ResponsiveContainer>
                    ) : (
                        <div>No data available for the RadarChart</div>
                    )}
                </div>
            </div>

            {/* Products List Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products Overview</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <ul className="space-y-3">
                        {productData.map((product, index) => (
                            <li key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition duration-200">
                                <span className="text-gray-700">{product.name}</span>
                                <span className="text-gray-900 font-semibold">{product.quantity} units</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;