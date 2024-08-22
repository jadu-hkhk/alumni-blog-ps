import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/public/blog")
            .then((response) => {
                setBlogs(response.data.blogs);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])


    return (
        <div className=' min-h-screen w-screen p-14 pt-10'>
            <div className='mb-8'>
                <h1 className='text-4xl font-bold text-gray-100 p-0'>Blogs</h1>
                <p className='text-lg text-gray-300'>Explore our latest blog posts</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {blogs.map(blog => <Blog key={blog._id} id={blog._id} title={blog.title} description={blog.description} />)}
            </div>
        </div>
    )
}

function Blog({ title, description, id }) {
    return (
        <div className='relative bg-gray-100 p-6 rounded-lg shadow shadow-gray-800 hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300' >
            <h1 className='text-xl text-gray-800 font-semibold mb-4'>{title}</h1>
            <h2 className='text-gray-600 mb-4 break-words'>{description.length > 150 ? `${description.slice(0, 150)}...` : description}</h2>
            <a href={`/Content/${id}`} className='text-blue-500 hover:text-blue-700 font-medium absolute bottom-4 right-4 transform hover:scale-105 transtion-transform duration-300 '>Read More </a>
            <ToastContainer />
        </div>
    )
}