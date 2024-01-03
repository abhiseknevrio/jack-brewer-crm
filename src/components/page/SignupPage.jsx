import React from 'react'
import WithoutAuthLeftCompo from '../atom/WithoutAuthLeftCompo'
import Signup from '../molecule/Signup'

const SignupPage = () => {
    return (
        <div className='flex'>
            <div className='w-40%'>
                <WithoutAuthLeftCompo />
            </div>
            <div className='w-60%'>
                <Signup />
            </div>
        </div>
    )
}

export default SignupPage