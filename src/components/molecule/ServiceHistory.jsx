import React from 'react'
import ServiceCard from '../atom/ServiceCard'

const ServiceHistory = () => {

    const servicesHistory = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <div className='text-xl font-medium grid grid-cols-2 px-10'>
                <div>Services</div>
                <div className='grid grid-cols-3'>
                    <div className='flex justify-center'>Quantity</div>
                    <div className='flex justify-center'>Status</div>
                </div>
            </div>
            <div className='mt-10'>
                {servicesHistory &&
                    servicesHistory.map(service => (
                        <div className='mb-5' key={service}>
                            <ServiceCard />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ServiceHistory