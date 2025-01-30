import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaComment, FaEdit, FaTrash } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [editingPostId, setEditingPostId] = useState(null);
    const [messageContent, setMessageContent] = useState('');
    const [currentPostId, setCurrentPostId] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const userId = 1; // Replace with actual user ID

    // Fetch all posts
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Create or update post
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingPostId) {
                await axios.put(`http://localhost:5000/posts/${editingPostId}`, {
                    title,
                    content,
                    image_url: imageUrl,
                });
                alert('Post updated successfully');
            } else {
                await axios.post('http://localhost:5000/posts', {
                    title,
                    content,
                    user_id: userId,
                    image_url: imageUrl,
                });
                alert('Post created successfully');
            }
            resetForm();
            fetchPosts(); // Refresh the post list after creating/updating
        } catch (error) {
            console.error('Error creating/updating post', error);
        }
    };

    // Reset form fields
    const resetForm = () => {
        setTitle('');
        setContent('');
        setImageUrl('');
        setEditingPostId(null);
    };

    // Edit post
    const editPost = (post) => {
        setTitle(post.title);
        setContent(post.content);
        setImageUrl(post.image_url);
        setEditingPostId(post.post_id);
    };

    // Delete post
    const deletePost = async (postId) => {
        try {
            await axios.delete(`http://localhost:5000/posts/${postId}`);
            alert('Post deleted successfully');
            fetchPosts(); // Refresh the post list after deleting
        } catch (error) {
            console.error('Error deleting post', error);
        }
    };

    // Like post
    const likePost = async (postId) => {
        try {
            await axios.post(`http://localhost:5000/posts/${postId}/like`, { user_id: userId });
            alert('Post liked successfully');
        } catch (error) {
            console.error('Error liking post', error);
        }
    };

    // Send message
    const sendMessage = async (e) => {
        e.preventDefault();
        if (!messageContent || !currentPostId) return;

        try {
            await axios.post('http://localhost:5000/messages/', {
                sender_id: userId,
                receiver_id: 1, // Replace with actual receiver ID
                content: messageContent,
                reply_to_message_id: null,
            });
            alert('Message sent successfully');
            setMessageContent('');
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    // Filter posts based on search query
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-light-blue-100 min-h-screen p-4 flex flex-col">
            {/* Search Bar positioned on the right side */}
            <div className="relative mb-4 w-full bg-white max-w-xs mx-auto">
                <FaSearch className="absolute left-3 top-2 text-white-400" />
                <input 
                    type="text" 
                    placeholder="Search posts..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="border p-2 pl-10 rounded w-full"
                />
            </div>

            {/* Posts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPosts.map(post => (
                    <div key={post.post_id} className="shadow-md bg-black rounded-2xl overflow-hidden h-full flex flex-col">
                        <h2 className="text-xl text-white font-bold p-4">{post.title}</h2>
                        <p className="px-1 text-white ">{post.content}</p>
                        {post.image_url && <img src={post.image_url} alt={post.title} className="w-full h-auto mt-2 rounded-t-lg" />}
                        
                        <div className="flex items-center mt-2 p-4 flex-grow">
                            <button onClick={() => likePost(post.post_id)} className="flex items-center text-red-500 mr-4">
                                <FaHeart className="mr-1" /> Like
                            </button>
                            <button onClick={() => editPost(post)} className="flex items-center text-yellow-500 mr-4">
                                <FaEdit className="mr-1" /> Edit
                            </button>
                            <button onClick={() => deletePost(post.post_id)} className="flex items-center text-red-500">
                                <FaTrash className="mr-1" /> Delete
                            </button>
                            <button onClick={() => setCurrentPostId(post.post_id)} className="flex items-center text-blue-500 ml-auto">
                                <FaComment className="mr-1" /> Message
                            </button>
                        </div>

                        {/* Message Form */}
                        {currentPostId === post.post_id && (
                            <form onSubmit={sendMessage} className="mt-4 px-4 pb-4">
                                <input 
                                    type="text" 
                                    placeholder="Type your message..." 
                                    value={messageContent} 
                                    onChange={(e) => setMessageContent(e.target.value)} 
                                    className="border text-white p-2 rounded w-full mb-2"
                                    required
                                />
                                <button type="submit" className="bg-green-500 text-white p-2 rounded">Send</button>
                            </form>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
