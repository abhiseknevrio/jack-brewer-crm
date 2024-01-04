import React from 'react'
import Dropdown from './Dropdown'
import ButtonPrimary from './ButtonPrimary'

const ServiceRequestCard = () => {
    return (
        <div className="p-9 homeCard">
            <h3 className="text-xl font-medium leading-6 text-gray-900 mb-5">Request Service</h3>
            <div className="grid grid-cols-2 gap-x-14 gap-y-10 mt-10">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <ButtonPrimary text="Confirm" />
            </div>
        </div>
    )
}

export default ServiceRequestCard