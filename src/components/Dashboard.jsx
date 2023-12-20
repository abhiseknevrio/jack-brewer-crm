import React from 'react'

const Dashboard = () => {
    return (
        <div className='h-screen flex'>
            <div className='w-1/2 bg-btnBg flex justify-center items-center'>
                <img src='/assets/images/logo.png' />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                User Data
            </div>
        </div>
    )
}

export default Dashboard;