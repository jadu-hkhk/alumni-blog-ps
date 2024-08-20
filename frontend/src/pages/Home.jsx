import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = "Home - Alumni Cell"; // Set the page title
    }, []);

    return (
        <div className='h-screen w-screen p-14 pt-10 bg-gray-900'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold text-gray-100 mb-4'>Welcome to the Alumni Cell</h1>
                <p className='text-lg text-gray-300 mb-8'>
                    Explore, connect, and stay updated with the latest news and blogs from our alumni community.
                </p>
                <a href="/blogs" className='text-blue-500 hover:text-blue-700 font-medium mr-4'>
                    Read Our Blogs
                </a>
                <a href="/news" className='text-blue-500 hover:text-blue-700 font-medium'>
                    Latest News
                </a>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold text-gray-200 mb-4'>What We Offer</h2>
                <p className='text-lg text-gray-300'>
                    Our Alumni Cell provides a platform for alumni to stay connected, share experiences, and contribute to the community.
                    Whether you are looking for news updates, blog posts, or ways to get involved, we have something for everyone.
                </p>
            </div>
        </div>
    )
}
