import React from 'react';
import TermsAndConditions from './molecule/TermsAndConditions';
import { Link } from 'react-router-dom';
import ServiceHistory from './molecule/ServiceHistory';
import Dropdown from './atom/Dropdown';
import ButtonPrimary from './atom/ButtonPrimary';

const Dashboard = () => {
    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className='w-1/4 bg-btnBg p-4'>
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
                    <Link to='/' className='flex items-center text-bgWhite'>
                        <img src='/assets/images/logout.png' alt='' className='w-6 h-6 mr-2' />
                        <span className='text-lg font-medium'>Log out</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className='w-full mt-12 ml-32 p-8'>
                {/* <TermsAndConditions /> */}
                {/* <ServiceHistory /> */}

                <div className='w-3/4'>
                    <h1 className='text-3xl font-medium border-b border-lightGray pb-2.5'>Welcome, Abhisek</h1>
                    <div className="p-9 mt-20 homeCard">
                        <h3 className="text-xl font-medium leading-6 text-gray-900 mb-5">Request Service</h3>
                        <div className="grid grid-cols-2 gap-x-14 gap-y-10 mt-10">
                            <Dropdown />
                            <Dropdown />
                            <Dropdown />
                            <ButtonPrimary text="Confirm" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;