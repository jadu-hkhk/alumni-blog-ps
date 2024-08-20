import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/public/news")
            .then((response) => {
                setNews(response.data.news);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (
        <div className='h-screen w-screen p-14 pt-10'>
            <div className='mb-8'>
                <h1 className='text-4xl font-bold text-gray-100 p-0'>News</h1>
                <p className='text-lg text-gray-300'>Stay updated with our latest news</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {news.map(item => <NewsItem key={item._id} id={item._id} title={item.title} description={item.description} />)}
            </div>
        </div>
    )
}

function NewsItem({ title, description, id }) {
    return (
        <div className='relative bg-gray-100 p-6 rounded-lg shadow shadow-gray-800 hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300'>
            <h1 className='text-xl text-gray-800 font-semibold mb-4'>{title}</h1>
            <h2 className='text-gray-600 mb-4 break-words'>{description.length > 150 ? `${description.slice(0, 150)}...` : description}</h2>
            <a href={`/News/${id}`} className='text-blue-500 hover:text-blue-700 font-medium absolute bottom-4 right-4 transform hover:scale-105 transition-transform duration-300'>Read More</a>
        </div>
    )
}
