import React from 'react'
import Login from '../molecule/Login'
import WithoutAuthLeftCompo from '../atom/WithoutAuthLeftCompo'

const LoginPage = () => {
    return (
        <div className='flex'>
            <div className='w-40%'>
                <WithoutAuthLeftCompo />
            </div>
            <div className='w-60%'>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage