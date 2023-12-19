import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <div
            className='bg-btnBg py-2.5 px-4 rounded-xl text-bgWhite text-center 
                      hover:bg-blue-600 transition duration-300 shadow-md cursor-pointer'
        >
            <button type={props.type}>{props.text}</button>
        </div>
    )
}

export default ButtonPrimary;