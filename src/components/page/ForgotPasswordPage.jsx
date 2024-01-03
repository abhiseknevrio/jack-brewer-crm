import React from 'react'
import WithoutAuthLeftCompo from '../atom/WithoutAuthLeftCompo'
import ForgotPassword from '../molecule/ForgotPassword'

const ForgotPasswordPage = () => {
    return (
        <div className='flex'>
            <div className='w-40%'>
                <WithoutAuthLeftCompo />
            </div>
            <div className='w-60%'>
                <ForgotPassword />
            </div>
        </div>
    )
}

export default ForgotPasswordPage;