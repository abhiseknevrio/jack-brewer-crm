import React from 'react'
import WithoutAuthLeftCompo from '../atom/WithoutAuthLeftCompo'
import NewPassword from '../molecule/NewPassword'

const NewPasswordPage = () => {
    return (
        <div className='flex'>
            <div className='w-40%'>
                <WithoutAuthLeftCompo />
            </div>
            <div className='w-60%'>
                <NewPassword />
            </div>
        </div>
    )
}

export default NewPasswordPage