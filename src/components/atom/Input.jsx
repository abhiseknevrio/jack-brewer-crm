import React from 'react'

const Input = (props) => {
    return (
        <div className='mb-4'>
            <input
                className='w-full p-3 bg-inputBg rounded-xl'
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                onChange={(e) => props.onChange(e)}
                required={props.required ? true : false}
            />
        </div>
    )
}

export default Input