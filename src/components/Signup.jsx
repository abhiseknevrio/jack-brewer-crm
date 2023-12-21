import React, { useState } from 'react';
import ButtonPrimary from './atom/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import Input from './atom/Input';
import CustomWebcam from './CustomWebcam';

const Signup = () => {

    const navigate = useNavigate();
    const [openCamera, setOpenCamera] = useState(false);

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
                    <div className='flex py-2 pl-3 my-2 bg-blue-400 cursor-pointer' onClick={() => setOpenCamera(!openCamera)}>
                        Click Photo
                    </div>
                </div>
                {
                    openCamera && <CustomWebcam />
                }

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