import React from 'react'

const Dropdown = () => {
    return (
        <div className='relative'>
            <select className='dropdown-select'>
                <option>Clothing</option>
                <option>Member</option>
                <option>{Date.now()}</option>
            </select>
        </div>
    )
}

export default Dropdown