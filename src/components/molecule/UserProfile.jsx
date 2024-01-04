import React from 'react'
import ServiceRequestCard from '../atom/ServiceRequestCard'
import RecentServices from './RecentServices'

const UserProfile = () => {
    return (
        <div>
            <h1 className='text-3xl font-medium border-b border-lightGray pb-2.5'>Welcome, Abhisek</h1>
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