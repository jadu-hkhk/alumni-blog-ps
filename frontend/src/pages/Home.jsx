export default function Home() {
    return (
        <div className='min-h-screen w-full p-6 md:p-14 text-gray-100'>
            <div className='flex flex-col items-center justify-center text-center mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                    Welcome to the Alumni Cell
                </h1>
                <p className='text-base md:text-lg text-gray-300 mb-6 md:mb-8'>
                    Explore, connect, and stay updated with the latest news and blogs from our alumni community.
                </p>
                <div className='flex flex-col md:flex-row md:space-x-4'>
                    <a href="/blog" className='text-blue-400 hover:text-blue-600 font-medium mb-2 md:mb-0'>
                        Read Our Blogs
                    </a>
                    <a href="/news" className='text-blue-400 hover:text-blue-600 font-medium'>
                        Latest News
                    </a>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-200 mb-4'>
                    What We Offer
                </h2>
                <p className='text-base md:text-lg text-gray-300'>
                    Our Alumni Cell provides a platform for alumni to stay connected, share experiences, and contribute to the community.
                    Whether you are looking for news updates, blog posts, or ways to get involved, we have something for everyone.
                </p>
            </div>
        </div>
    );
}
