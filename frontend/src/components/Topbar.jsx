import { useNavigate } from "react-router-dom";

export default function Topbar({ setIsAuthenticated, isAuthenticated }) {
    const navigate = useNavigate();

    return (
        <div className="bg-custom-topbar text-white py-4 px-6 md:px-8 shadow-md flex justify-between items-center font-quantico shadow-lg shadow-gray-400">
            <div className="flex space-x-4 md:space-x-6 items-center">
                <img src="https://alumni-cell-yearbook-portal-1.vercel.app/images/1.png" alt="alumni cell logo" className='w-8 md:w-10 rounded-lg drop-shadow-xl' />

                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    className="text-gray-300 hover:text-blue-400 font-semibold text-sm md:text-lg hover:border rounded-full px-4 py-2 hover:border-gray-400 transform hover:scale-110 transition-transform duration-300"
                >
                    Home
                </button>

                <button
                    onClick={() => {
                        navigate("/blog");
                    }}
                    className="text-gray-300 hover:text-blue-400 font-semibold text-sm md:text-lg hover:border rounded-full px-4 py-2 hover:border-gray-400 transform hover:scale-110 transition-transform duration-300"
                >
                    Blogs
                </button>

                <button
                    onClick={() => {
                        navigate("/news");
                    }}
                    className="text-gray-300 hover:text-blue-400 font-semibold text-sm md:text-lg hover:border rounded-full px-4 py-2 hover:border-gray-400 transform hover:scale-110 transition-transform duration-300 "
                >
                    News
                </button>
            </div>

            {isAuthenticated ?
                <div className="flex space-x-4 md:space-x-6">
                    <button
                        onClick={() => {
                            navigate("/publish");
                        }}
                        className="border border-gray-200 text-gray-100 hover:bg-sky-200 hover:text-gray-700 hover:border-gray-600 px-4 py-1 md:px-5 md:py-2 rounded-full text-sm md:text-md font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 transition-transform duration-300"
                    >
                        Publish
                    </button>

                    <button onClick={() => {
                        localStorage.removeItem('token');
                        setIsAuthenticated(false);
                        navigate("/");
                    }} className="border border-gray-200 text-gray-100 hover:bg-sky-200 hover:text-gray-700 hover:border-gray-600 px-4 py-1 md:px-5 md:py-2 rounded-full text-sm md:text-md font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-95 transition-transform duration-300">
                        Log Out
                    </button>
                </div>
                :
                <div className="flex space-x-4 md:space-x-6">
                    <button
                        onClick={() => {
                            navigate("/signin");
                        }}
                        className="border border-gray-500 bg-purple-900 hover:bg-purple-800 text-white px-4 py-1 md:px-5 md:py-2 rounded-full text-sm md:text-md font-semibold shadow-sm hover:shadow-gray-500 transition duration-300 ease-in-out"
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => {
                            navigate("/signup");
                        }}
                        className="border border-gray-500 hover:bg-purple-800 text-white px-4 py-1 md:px-5 md:py-2 rounded-full text-sm md:text-md font-semibold shadow-inner hover:shadow-gray-500 transition duration-300 ease-in-out"
                    >
                        Sign Up
                    </button>
                </div>
            }
        </div>
    );
}
