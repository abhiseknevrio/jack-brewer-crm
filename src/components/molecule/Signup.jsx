import React, { useState } from 'react';
import ButtonPrimary from '../atom/ButtonPrimary';
import { Link, useNavigate } from 'react-router-dom';
import WebcamComponent from '../WebcamComponent';
import './Signup.css';

const Signup = () => {

    const navigate = useNavigate();

    const [openCamera, setOpenCamera] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        photo: '',
        idCard: '',
        incomeVerification: '',
        phoneNo: '',
        email: '',
        dateOfBirth: '',
        marriageStatus: 'Single',
        servicesNeeded: 'A',
    });

    const handleInputChange = (name, value) => {
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (name, event) => {
        const file = event.target.files[0];
        console.log(file)
        handleInputChange(name, file);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate("/");
    }

    return (
        <section className='overflow-y-scroll h-screen'>
            <div className='flex flex-col justify-center items-center pt-44'>
                <h1 className='text-title font-bold mb-4 w-form'>Register now</h1>
                <form className='mt-10  w-form' onSubmit={handleSubmit}>
                    <div>
                        <div className='input-container mb-4'>
                            <div>First Name</div>
                            <input value={userData.firstName} type='text' onChange={(e) => handleInputChange('firstName', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Last Name</div>
                            <input value={userData.lastName} type='text' onChange={(e) => handleInputChange('lastName', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Address</div>
                            <input type='text' value={userData.address} onChange={(e) => handleInputChange('address', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Photo</div>
                            <div className='flex py-2 pl-3 my-2 bg-blue-400 cursor-pointer' onClick={() => setOpenCamera(!openCamera)}>
                                Click Photo
                            </div>
                            <div>
                                {
                                    openCamera && <WebcamComponent />
                                }
                            </div>
                        </div>
                        <div className='input-container mb-4'>
                            <div>ID Card</div>
                            <input type='file' value={userData.idCard} onChange={(e) => handleFileChange('idCard', e)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Income Verification (Optional)</div>
                            <input type='file' value={userData.incomeVerification} onChange={(e) => handleFileChange('incomeVerification', e)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Phone No</div>
                            <input type='tel' value={userData.phoneNo} onChange={(e) => handleInputChange('phoneNo', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Email (Optional)</div>
                            <input type='email' value={userData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Date of Birth</div>
                            <input type='date' placeholder='DD/MM/YY' value={userData.dateOfBirth} onChange={(e) => handleInputChange('dateOfBirth', e.target.value)} />
                        </div>
                        <div className='input-container mb-4'>
                            <div>Marriage Status</div>
                            <select value={userData.marriageStatus} onChange={(e) => handleInputChange('marriageStatus', e.target.value)}>
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                        </div>
                        <div className='input-container mb-4'>
                            <div>Services needed</div>
                            <select value={userData.servicesNeeded} onChange={(e) => handleInputChange('servicesNeeded', e.target.value)}>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <ButtonPrimary text='Sign Up' />
                    </div>
                </form>

                <div className='text-gray flex justify-center mt-5'>
                    Already have an account? &nbsp; <Link to={'/login'} className='text-btnBg font-medium'>Sign In</Link>
                </div>
            </div >
        </section >
    )
}

export default Signup;