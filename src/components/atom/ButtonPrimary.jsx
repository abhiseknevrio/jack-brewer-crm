import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <button type={props.type || 'submit'} className='w-full'>
            <div
                className='bg-btnBg text-sm font-medium p-4 rounded-xl text-bgWhite text-center 
                      hover:bg-blue-600 transition duration-300 shadow-md cursor-pointer'
            >
                {props.text}
            </div>
        </button>
    )
}

export default ButtonPrimary;