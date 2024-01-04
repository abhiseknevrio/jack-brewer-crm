import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonModal from '../atom/CommonModal'

const Dashboard = () => {

    const [isLogout, setLogout] = useState(false)
    const closeModal = () => {
        setLogout(false)
    };

    return (
        <div>
            <div className='flex items-center mb-8'>
                <img src='/assets/images/profile.png' alt='profile-pic' className='w-10 h-10 rounded-full mr-4' />
                <h1 className='text-lg text-bgWhite font-medium'>Hi, Abhisek</h1>
            </div>
            <div>
                <Link to='/' className='flex items-center mb-30 text-bgWhite'>
                    <img src='/assets/images/home.png' alt='' className='w-6 h-6 mr-2' />
                    <span className='text-lg font-medium'>Home</span>
                </Link>
                <Link to='/service-history' className='flex items-center mb-30 text-bgWhite'>
                    <img src='/assets/images/service.png' alt='' className='w-6 h-6 mr-2' />
                    <span className='text-lg font-medium'>Service History</span>
                </Link>
                <Link to='/terms-and-conditions' className='flex items-center mb-30 text-bgWhite'>
                    <img src='/assets/images/terms-and-conditions.png' alt='' className='w-6 h-6 mr-2' />
                    <span className='text-lg font-medium'>Terms & Conditions</span>
                </Link>
                <div className='flex items-center text-bgWhite cursor-pointer' onClick={() => setLogout(true)}>
                    <img src='/assets/images/logout.png' alt='' className='w-6 h-6 mr-2' />
                    <span className='text-lg font-medium'>Log out</span>
                </div>
            </div>
            {
                isLogout && <CommonModal isModalOpen={isLogout} text="Are you sure you want to logout?" closeModal={closeModal} />
            }
        </div>
    )
}

export default Dashboard