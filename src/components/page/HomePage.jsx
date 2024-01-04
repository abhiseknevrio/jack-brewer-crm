import React from 'react';
import TermsAndConditionsPage from '../page/TermsAndConditionsPage';
import { useLocation } from 'react-router-dom';
import UserProfile from '../molecule/UserProfile';
import Dashboard from '../molecule/Dashboard';
import ServiceHistoryPage from './ServiceHistoryPage';

const componentsByPath = {
    '/': <UserProfile />,
    '/terms-and-conditions': <TermsAndConditionsPage />,
    '/service-history': <ServiceHistoryPage />,
};

const HomePage = () => {

    const { pathname } = useLocation()

    return (
        <div className='flex h-screen overflow-hidden'>
            {/* Sidebar */}
            <div className='w-20% bg-btnBg p-4'>
                <Dashboard />
            </div>

            {/* Main Content */}
            <div className='mt-50 mx-130 w-80%'>
                {componentsByPath[pathname]}
            </div>
        </div >
    );
};

export default HomePage;