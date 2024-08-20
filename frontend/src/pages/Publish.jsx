import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Publish({ isAuthenticated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    const navigate = useNavigate();

    if (!isAuthenticated) navigate("/signin");

    const handlePublish = () => {

        toast.success("Content published successfully!");

    };

    return (
        <div className='h-screen w-screen p-14 pt-16 '>
            <div className='max-w-4xl mx-auto bg-indigo-100 p-8 rounded-lg shadow-md shadow-indigo-300'>
                <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                    Publish New Content
                </h1>
                <div className='mb-6'>
                    <label htmlFor="title" className='block text-gray-700 text-lg font-semibold mb-2'>
                        Title:
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="description" className='block text-gray-700 text-lg font-semibold mb-2'>
                        Description:
                    </label>
                    <textarea
                        id="description"
                        placeholder="Type here"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400'
                        rows="4"
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-lg font-semibold mb-2'>
                        Type:
                    </label>
                    <div className='flex space-x-4'>
                        <button
                            onClick={() => setType("blog")}
                            className={`p-3  border rounded-lg ${type == "blog" ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-indigo-800 hover:text-white transition-colors duration-300 transform hover:scale-105 transition-transform duration-300`}
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => setType("news")}
                            className={`p-3  border rounded-lg ${type == "news" ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-indigo-800 hover:text-white transition-colors duration-300 transform hover:scale-105 transition-transform duration-300`}
                        >
                            News
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handlePublish}
                        className='w-full py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-800 transition-colors duration-300'
                    >
                        Publish
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
