import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://online-forum-gamer-backend.onrender.com/login', { email, password });
            localStorage.setItem('token', response.data.access_token); // Store the token
            toast.success('Login successful! Redirecting to homepage...');
            setTimeout(() => {
                navigate('/home'); // Redirect to homepage after successful login
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error during login', error);
            toast.error(error.response ? error.response.data.message : 'Login failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="border p-3 rounded w-full mb-4"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="border p-3 rounded w-full mb-4"
                />
                <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition duration-200">
                    Login
                </button>
                <p className="mt-4 text-center">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
