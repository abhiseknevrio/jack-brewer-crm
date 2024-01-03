import React from 'react'
import WithoutAuthLeftCompo from '../atom/WithoutAuthLeftCompo'
import OTPVerification from '../molecule/OTPVerification'

const OTPVerificationPage = () => {
    return (
        <div className='flex'>
            <div className='w-40%'>
                <WithoutAuthLeftCompo />
            </div>
            <div className='w-60%'>
                <OTPVerification />
            </div>
        </div>
    )
}

export default OTPVerificationPage;