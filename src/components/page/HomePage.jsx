import React from 'react';
import TermsAndConditions from '../molecule/TermsAndConditions';
import { useLocation } from 'react-router-dom';
import ServiceHistory from '../molecule/ServiceHistory';
import UserProfile from '../molecule/UserProfile';
import Dashboard from '../molecule/Dashboard';

const componentsByPath = {
    '/': <UserProfile />,
    '/terms-and-conditions': <TermsAndConditions />,
    '/service-history': <ServiceHistory />,
};

const HomePage = () => {

    const { pathname } = useLocation()

    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className='w-20% bg-btnBg p-4'>
                <Dashboard />
            </div>

            {/* Main Content */}
            <div className='mt-12 mx-130 w-80%'>
                {componentsByPath[pathname]}
            </div>
        </div >
    );
};

export default HomePage;