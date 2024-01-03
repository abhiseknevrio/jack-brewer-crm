import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../atom/ButtonPrimary';
import Input from '../atom/Input';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/otp-verification');
    };

    return (
        <section className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-title font-bold mb-4'>Forgot Password</h1>
                <p className='text-gray mb-8'>Please enter the email associated with your account</p>

                <form className='mt-14 w-form' onSubmit={handleSubmit}>
                    <div className='mb-10'>
                        <div className='mb-5'>Email</div>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='Enter username'
                            required={true}
                        />
                    </div>
                    <div>
                        <ButtonPrimary type="submit" text='Submit' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ForgotPassword;