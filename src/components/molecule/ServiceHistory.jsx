import React from 'react'
import ServiceCard from '../atom/ServiceCard'

const ServiceHistory = () => {

    const servicesHistory = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className=''>
            <h1 className='text-3xl font-medium border-b border-lightGray pb-2.5'>All Service History</h1>
            <div className='text-xl font-medium mt-10 grid grid-cols-2 px-10'>
                <div>Services</div>
                <div className='grid grid-cols-3'>
                    <div className='flex justify-center'>Quantity</div>
                    <div className='flex justify-center'>Status</div>
                </div>
            </div>
            {servicesHistory && servicesHistory.map(service => (
                <div className='mt-5' key={service}>
                    <ServiceCard />
                </div>
            ))}
        </div>
    )
}

export default ServiceHistory