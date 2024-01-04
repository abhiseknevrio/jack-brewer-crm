import React from 'react'
import ServiceRequestCard from '../atom/ServiceRequestCard'
import RecentServices from './RecentServices'

const UserProfile = () => {
    return (
        <div>
            <div className='border-b border-lightGray pb-2.5 flex items-center'>
                <h1 className='text-3xl font-medium'>Welcome, Abhisek</h1>
                <img src='/assets/images/info.svg' alt='' className='ml-2.5' />
            </div>
            <div className="mt-20">
                <ServiceRequestCard />
            </div>
            <div className='mt-10'>
                <RecentServices />
            </div>
        </div>
    )
}

export default UserProfile