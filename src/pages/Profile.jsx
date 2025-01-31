import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const userId = 1; // Replace with actual user ID

    // Create a new post
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const postData = {
            title,
            content,
            user_id: userId,
            image_url: imageUrl,
        };

        console.log('Post Data:', postData); // Log data for debugging
        
        try {
            const response = await axios.post('https://online-forum-gamer-backend.onrender.com/posts/', postData);
            alert('Post created successfully');
            resetForm();
        } catch (error) {
            console.error('Error creating post', error);
            alert(`Error: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    // Reset form fields
    const resetForm = () => {
        setTitle('');
        setContent('');
        setImageUrl('');
    };

    return (
        <div className="bg-light-blue-100 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4  text-white text-center">Create a New Post</h1>

            {/* Post Form */}
            <form onSubmit={handleSubmit} className="mb-4 max-w-md mx-auto bg-white p-6 rounded shadow-md">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <textarea 
                    placeholder="Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    className="border p-2 rounded w-full mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Post</button>
            </form>
        </div>
    );
};

export default Profile;
