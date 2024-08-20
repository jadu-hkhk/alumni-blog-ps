import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ContentId() {
    const { id } = useParams();
    const [content, setContent] = useState({});
    // const author = "";

    useEffect(() => {
        axios.get(`http://localhost:3000/public/content/${id}`)
            .then((response) => {
                setContent(response.data.content);
                // author = response.data.username;
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <div className='w-full h-screen p-8'>
            <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
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
    )
}