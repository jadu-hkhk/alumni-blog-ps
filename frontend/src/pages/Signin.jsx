import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function signInHandler() {
        axios.post("http://localhost:3000/alumni/signin", {
            email: email,
            password: password
        }).then(function (response) {
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            toast(response.data.message)
            setTimeout(() => { navigate("/"); }, 3000)
        }).catch((e) => toast(e.response.data.message))
    }

    return (<>
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
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-full max-w-sm p-6 bg-gray-200 rounded-lg shadow-md'>
                <img src="https://alumni-cell-yearbook-portal-1.vercel.app/images/1.png" alt="alumni cell logo" className='w-20 mx-auto mb-6 rounded-xl drop-shadow-md' />
                <h1 className='text-2xl font-semibold text-center mb-6 text-gray-800'>Sign In</h1>
                <input placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)} className='w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 ring-blue-400' />
                <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} className='w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 ring-blue-400' />
                <button onClick={signInHandler} className='w-full p-3 text-white bg-custom-topbar rounded-lg hover:bg-purple-900 focus:outline-none' >Sign In</button>
            </div>
        </div>
    </>
    )
}