import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';

const IndividualAchievement = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const location = useLocation();
    const achievement = location.state;

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleAddComment = () => {
        if (commentInput.trim() !== "") {
            setComments([...comments, commentInput]);
            setCommentInput("");
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
            <div className='mx-8 p-5 md:max-w-3xl bg-white shadow-lg rounded-lg my-10'>
             
                <h2 className='font-semibold text-xl md:text-3xl mb-2'>{achievement.title}</h2>
                <p className='text-gray-700'>by <span className='font-semibold text-gray-600 underline'>{achievement.name}</span></p>
                <hr className='my-4' />

                <p className='px-2'>{achievement.description.slice(0,400)}</p>

                <img src={achievement.image} alt='achievement' className='my-4 w-full h-80 object-cover rounded-lg' />

                <p className='px-2'>{achievement.description.slice(400)}</p>

                <div className='flex items-center space-x-4 mt-3'>
                    <button onClick={handleLike} className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600'>
                        👍 Like {likes > 0 && `(${likes})`}
                    </button>

                    <input 
                        type="text" 
                        className="border p-2 rounded-lg w-full"
                        placeholder="Add a comment..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button onClick={handleAddComment} className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600'>
                        💬 Comment
                    </button>
                </div>

                <div className='mt-4'>
                    <h3 className='font-semibold text-lg'>Comments</h3>
                    <ul className='mt-2 space-y-2'>
                        {comments.length > 0 ? comments.map((comment, index) => (
                            <li key={index} className='bg-gray-100 p-2 rounded-lg'>{comment}</li>
                        )) : <p className="text-gray-500">No comments yet.</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IndividualAchievement;
