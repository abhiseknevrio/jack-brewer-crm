import React, { useState } from 'react';
import ButtonPrimary from './atom/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import Input from './atom/Input';

const Signup = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState([
        {
            name: 'email',
            value: '',
            placeholder: 'Enter username',
            type: 'email',
        },
        // {
        //     name: 'password',
        //     value: '',
        //     placeholder: 'Password',
        //     type: 'password',
        // },
    ]);

    const handleInputChange = (name, value) => {
        setUserData((prevUserData) =>
            prevUserData.map((field) =>
                field.name === name ? { ...field, value } : field
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/");
    }

    return (
        <section className='w-form'>
            <h1 className='text-title font-bold mb-4'>Register now</h1>

            <form className='mt-10' onSubmit={handleSubmit}>
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

                <div>
                    <ButtonPrimary text='Sign Up' />
                </div>
            </form>

            <div className='text-gray flex justify-center mt-5'>
                Already have an account? &nbsp; <Link to={'/login'} className='text-btnBg font-medium'>Sign In</Link>
            </div>
        </section>
    )
}

export default Signup;