import React from 'react';
import { FaUsers, FaGamepad, FaComments } from 'react-icons/fa';

const About = () => {
    return (
      
        <div className=" text-white py-4 ">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg text-center mb-4">
                Welcome to the **Online Forum for Gamers**! Our community is dedicated to bringing together gamers from all walks of life to share their passion for gaming.
            </p>
            <p className="text-lg text-center mb-6">
                Whether you're a casual player or a hardcore gamer, you'll find a place here to discuss your favorite games, share tips and tricks, and connect with fellow enthusiasts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-black p-4 rounded shadow-md flex flex-col items-center">
                    <FaUsers size={50} className="text-blue-500 mb-2" />
                    <h2 className="text-xl font-semibold">Join a Community</h2>
                    <p className="text-center">
                        Connect with like-minded gamers who share your interests. Make new friends and find teammates for your next adventure!
                    </p>
                </div>
                <div className="bg-black p-4 rounded shadow-md flex flex-col items-center">
                    <FaGamepad size={50} className="text-green-500 mb-2" />
                    <h2 className="text-xl font-semibold">Discuss Your Favorites</h2>
                    <p className="text-center">
                        Share your thoughts on the latest games, classic titles, and everything in between. Your opinion matters!
                    </p>
                </div>
                <div className="bg-black p-4 rounded shadow-md flex flex-col items-center">
                    <FaComments size={50} className="text-red-500 mb-2" />
                    <h2 className="text-xl font-semibold">Engage in Conversations</h2>
                    <p className="text-center">
                        Participate in discussions, ask questions, and get advice from experienced gamers. We're here to help each other out!
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Why Choose Us?</h3>
                <p className="mt-4 text-lg">
                    Our forum is designed with gamers in mind. We prioritize a friendly environment where everyone feels welcome. Join us today and be part of our growing community!
                </p>
            </div>

            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Get Involved!</h3>
                <p className="mt-4 text-lg">
                    Sign up now to start participating in discussions and sharing your gaming experiences. We can't wait to see you in the forum!
                </p>
            </div>
        </div>
    );
};

export default About;
