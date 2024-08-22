import axios from "axios";
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
        if (title == "" || description == "" || type == "") {
            toast("Fill in the required fields to Publish");
            return;
        }
        axios.post("http://localhost:3000/alumni/publish",
            {
                title: title,
                description: description,
                type: type
            }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                toast(response.data.message);
                setTimeout(() => { navigate(`/${type}`); }, 3000);
            })
            .catch(e => toast(e.response.data.message))

    };

    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={2000}
                closeOnClick
                closeButton={false}
                draggable
                pauseOnHover
                newestOnTop={false}
                theme='dark'
            />
            <div className='h-screen w-screen p-14 pt-16 '>
                <div className='max-w-4xl mx-auto bg-indigo-100 p-8 rounded-lg shadow-md shadow-indigo-300'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                        Publish New Content
                    </h1>
                    <div className='mb-6'>
                        <label htmlFor="title" className='block text-gray-800 text-lg font-semibold mb-2'>
                            Title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter the title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="description" className='block text-gray-800 text-lg font-semibold mb-2'>
                            Description:
                        </label>
                        <textarea
                            id="description"
                            placeholder="Type here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400'
                            rows="4"
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-800 text-lg font-semibold mb-2'>
                            Type:
                        </label>
                        <div className='flex space-x-4'>
                            <button
                                onClick={() => setType("blog")}
                                className={`p-3  border rounded-lg ${type == "blog" ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-indigo-800 hover:text-white transition-colors duration-300 transform hover:scale-105 transition-transform duration-300`}
                            >
                                Blog
                            </button>
                            <button
                                onClick={() => setType("news")}
                                className={`p-3  border rounded-lg ${type == "news" ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-indigo-800 hover:text-white transition-colors duration-300 transform hover:scale-105 transition-transform duration-300`}
                            >
                                News
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handlePublish}
                            className='w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-800 transition-colors duration-300'
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
