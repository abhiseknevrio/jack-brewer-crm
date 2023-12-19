import React from 'react'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import OTPVerification from './OTPVerification'
import NewPassword from './NewPassword';

const Home = () => {
    return (
        <div className='h-screen flex'>
            <div className='w-1/2 bg-btnBg flex justify-center items-center'>
                <img src='/assets/images/logo.png' />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Login />
                {/* <Signup /> */}
                {/* <ForgotPassword /> */}
                {/* <OTPVerification /> */}
                {/* <NewPassword /> */}
            </div>
        </div>
    )
}

export default Home;