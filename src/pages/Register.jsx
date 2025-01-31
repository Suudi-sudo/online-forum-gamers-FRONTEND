import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://online-forum-gamer-backend.onrender.com/user', { email, password });
            toast.success('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login'); 
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error during registration', error);
            toast.error(error.response ? error.response.data.message : 'Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
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
                    Register
                </button>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
