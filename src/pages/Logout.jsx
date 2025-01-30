import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        alert('Logged out successfully!');
        navigate('/'); // Redirect to the home page or registration page
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded shadow-md w-96 text-center">
                <h2 className="text-xl font-bold mb-4">Are you sure you want to logout?</h2>
                <button onClick={handleLogout} className="bg-red-600 text-white p-3 rounded w-full hover:bg-red-700 transition duration-200">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
