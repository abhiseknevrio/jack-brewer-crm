import React, { useState } from 'react'
import RepeatModal from './RepeatModal'
import CommonModal from './CommonModal';

const ServiceCard = () => {

    const [isRepeatModalOpen, setRepeatModalOpen] = useState(false);
    const [isCancelModalOpen, setCancelModalOpen] = useState(false);


    const closeModal = () => {
        setRepeatModalOpen(false);
        setCancelModalOpen(false)
    };

    return (
        <>
            <div className='grid grid-cols-2 px-10 py-3 service-card'>
                <div>
                    <div className='font-medium'>Clothing</div>
                    <div className='text-gray text-xs'>5 days ago</div>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='border-l border-lightGray flex justify-center items-center'>4</div>
                    <div className='border-l border-lightGray flex justify-center items-center'>0</div>
                    <div className='border-l border-lightGray flex justify-center items-center'>
                        <div>
                            <div className='text-textBlue font-medium text-xs mb-1.5 cursor-pointer' onClick={() => setRepeatModalOpen(true)}>Repeat</div>
                            <div className='text-redCol text-xs font-medium cursor-pointer' onClick={() => setCancelModalOpen(true)}>Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isRepeatModalOpen && <RepeatModal isModalOpen={isRepeatModalOpen} closeModal={closeModal} />
            }
            {
                isCancelModalOpen && <CommonModal text={"Are you sure you want to cancel the service?"} isModalOpen={isCancelModalOpen} closeModal={closeModal} />
            }
        </>
    )
}

export default ServiceCard