import React, { useState } from 'react';
import ButtonPrimary from '../atom/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../atom/Input';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/auth/authSlice';

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userData, setUserData] = useState([
        {
            name: 'email',
            value: '',
            placeholder: 'Enter username',
            type: 'email',
        },
        {
            name: 'password',
            value: '',
            placeholder: 'Password',
            type: 'password',
        },
    ]);

    const handleInputChange = (name, value) => {
        setUserData((prevUserData) =>
            prevUserData.map((field) =>
                field.name === name ? { ...field, value } : field
            )
        );
    };

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login())
        navigate("/");
    }

    return (
        <section className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-title font-bold mb-4'>Hello Everybody!</h1>
                <p className='text-gray mb-8'>Welcome back, silahkan daftar kembali</p>

                <form className='mt-10 w-form' onSubmit={handleLogin}>
                    <div>
                        {userData.map((field) => (
                            <Input
                                key={field.name}
                                value={field.value}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                type={field.type}
                                placeholder={field.placeholder}
                            />
                        ))}
                    </div>
                    <div className='text-right mb-8'>
                        <Link to={'/forgot-password'} className='text-gray hover:text-btnBg'>Forgot Password</Link>
                    </div>
                    <div>
                        <ButtonPrimary text='Log In' />
                    </div>
                </form>

                <div className='flex items-center my-10'>
                    <div className='border-t border-gray w-1/4'></div>
                    <div className='text-gray mx-auto text-xs'>Or continue with</div>
                    <div className='border-t border-gray w-1/4'></div>
                </div>
                <div className='flex justify-between'>
                    <div>Facebook</div>
                    <div>Google</div>
                </div>
                <div className='text-gray flex justify-end mt-10'>
                    Don't have an account? &nbsp; <Link to={'/register'} className='text-btnBg font-medium'>Register here</Link>
                </div>
            </div>
        </section>
    )
}

export default Login;
