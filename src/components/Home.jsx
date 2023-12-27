import React from 'react'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import OTPVerification from './OTPVerification'
import NewPassword from './NewPassword';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard'

const componentsByPath = {
    '/': <Dashboard />,
    '/register': <Signup />,
    '/login': <Login />,
    '/forgot-password': <ForgotPassword />,
    '/otp-verification': <OTPVerification />,
    '/new-password': <NewPassword />,
};

const Home = () => {

    const { pathname } = useLocation()

    return (
        // <div className='h-screen flex'>
        //     <div className='w-40% bg-btnBg flex justify-center items-center'>
        //         <img src='/assets/images/logo.png' alt='' />
        //     </div>
        //     <div className='w-60%'>
        //         {componentsByPath[pathname]}
        //     </div>
        // </div>
        <>
            {componentsByPath[pathname]}
        </>
    )
}

export default Home;