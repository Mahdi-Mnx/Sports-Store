import { Link, useNavigate } from 'react-router-dom';
import { fetchLogin } from '../api/auth/page';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { email, password };
            const response = await fetchLogin(data);

            if (response) {
                navigate('/');
            } else {
                // Handle login failure, e.g., show error message
                console.error("Login failed: ", response);
            }

            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Login error: ", error.message);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-lightGrayishBlue">
            <div className="w-full max-w-md p-8 space-y-6 bg-cadaan rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-veryDarkBlue">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-darkGray">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // required
                            className="w-full px-3 py-2 mt-1 border border-grayishBlue rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-darkGray">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // required
                            className="w-full px-3 py-2 mt-1 border border-grayishBlue rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-primary border-grayishBlue rounded focus:ring-primary"
                            />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-darkGray">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-secondery hover:text-primary">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-secondery focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Sign in
                        </button>
                        <div className="mt-4 text-center">
                            <Link to="/register" className="text-sm font-medium text-secondery hover:text-primary">
                                Don&apos;t have an account? Sign up
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;