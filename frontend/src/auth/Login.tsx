import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import api from '../api/api';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', {
                usernameOrEmail,
                password
            });

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            toast.success('Login successful!');
            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message || 'Internal server error!');
            } else {
                toast.error('Internal server error!');
            }
            // Clear input fields on error
            setUsernameOrEmail('');
            setPassword('');
        }
    };

    return (
        <div className="w-full h-screen flex gap-32">
            <div className="w-[400px] h-full bg-black relative overflow-hidden">
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted
                >
                    <source src="/login.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-6 left-6 font-['Bodoni_Moda_SC',_serif] font-medium text-white">
                    <h1 className="text-4xl">VISTA</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-semibold">Login into vista</h1>
                <div className="w-[420px] border-t-[1px] mt-8 "> 
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                        <div>
                            <label htmlFor="usernameOrEmail" className="block mb-2 font-semibold">Username or Email</label>
                            <input 
                                type="text" 
                                id="usernameOrEmail" 
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                                className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1" 
                                required
                            />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1" 
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-[rgba(0,0,0,1)] mt-2 text-white py-4 px-4 rounded-2xl hover:bg-[rgba(0,0,0,0.8)] transition duration-300"
                        >
                            Login
                        </button>
                        <p className="text-center">
                            {`Don't have an account? `}
                            <Link to="/signup" className="underline ml-1">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    );
};

export default Login;