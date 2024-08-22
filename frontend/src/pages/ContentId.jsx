import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

export default function ContentId() {
    const { id } = useParams();
    const [content, setContent] = useState({});
    const navigate = useNavigate();
    // const author = "";

    useEffect(() => {
        axios.get(`http://localhost:3000/public/content/${id}`,)
            .then((response) => {
                setContent(response.data.content);
                // author = response.data.username;
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    function DeleteHandler() {
        axios.delete(`http://localhost:3000/alumni/content/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                toast(response.data.message);
                setTimeout(() => { navigate('/blog') }, 3000)
            })
            .catch((e) => {
                toast(e.response.data.message);
            })
    }
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
            <div className='w-full h-screen p-8'>
                <div className='relative max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
                    <button
                        onClick={DeleteHandler}
                        className="absolute right-4 top-4 bg-rose-600 border border-gray-200 text-gray-100 hover:bg-rose-300 hover:text-gray-700 hover:border-gray-600 px-5 py-2 rounded-full text-md font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 transition-transform duration-300"
                    >
                        Delete
                    </button>
                    <h1 className='text-3xl font-bold text-gray-900 mb-4 '>
                        {content.title}
                    </h1>
                    <p className='text-gray-700 mb-6'>
                        {content.description}
                    </p>
                    {/* <p className='text-sm text-gray-500 mb-1'>
                    Author: {author}
                </p> */}
                    <p className='text-sm text-gray-500 '>
                        Created On: {new Date(content.createdOn).toDateString()}
                    </p>
                </div>
            </div>
        </>
    )
}