import React from 'react';

const ButtonSecondary = (props) => {
    return (
        <button type={props.type || 'submit'} className='w-full'>
            <div
                className='bg-transparent text-sm font-medium p-4 rounded-xl text-textBlue text-center border border-textBlue
                      hover:bg-blue-600 hover:text-bgWhite transition duration-300 shadow-md cursor-pointer'
            >
                {props.text}
            </div>
        </button>
    )
}

export default ButtonSecondary;