import React from 'react'
import ServiceCard from '../atom/ServiceCard'
import { Link } from 'react-router-dom'

const RecentServices = () => {
    const servicesHistory = [1, 2, 3, 4]

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='text-base font-medium'>Recent Services</h3>
                <Link to={'/service-history'} className='text-sm text-textBlue font-normal'>See All</Link>
            </div>
            <div className='mt-30'>
                {servicesHistory && servicesHistory.map(service => (
                    <div className='mt-5' key={service}>
                        <ServiceCard />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentServices