import React from 'react'
import ServiceHistory from '../molecule/ServiceHistory'

const ServiceHistoryPage = () => {
    return (
        <div className=''>
            <h1 className='text-2xl font-semibold text-textBlack border-b border-lightGray pb-2.5'>All Service History</h1>
            <div className='mt-50'>
                <ServiceHistory />
            </div>
        </div>
    )
}

export default ServiceHistoryPage