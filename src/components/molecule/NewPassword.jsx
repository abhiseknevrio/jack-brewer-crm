import React, { useState } from 'react';
import ButtonPrimary from '../atom/ButtonPrimary';
import Input from '../atom/Input';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {

    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <section className='w-full h-screen flex justify-center items-center'>
            <div className='w-form'>
                <div>
                    <h1 className='text-title font-bold mb-4'>Enter New Password</h1>
                    <p className='text-gray text-base w-339'>Reset your password to recovery & login to your account.</p>
                </div>

                <div className='my-10'>
                    <div>
                        <div className='mb-3 text-sm text-textBlack'>New password</div>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter new password'
                            required={true}
                        />
                    </div>
                    <div>
                        <div className='mb-3 text-sm text-textBlack'>Repeat Password</div>
                        <Input
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter same password'
                            required={true}
                        />
                    </div>
                    <span className='cursor-pointer' onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'} Password
                    </span>
                </div>
                <ButtonPrimary text='Confirm' />
            </div>
        </section >
    )
}

export default NewPassword;