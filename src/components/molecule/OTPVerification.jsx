import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import ButtonPrimary from '../atom/ButtonPrimary';

const OTPVerification = () => {

    const [otp, setOtp] = useState('');

    const handleChange = (code) => setOtp(code);

    return (
        <section className='flex justify-center items-center h-screen'>
            <div className='w-form'>
                <div>
                    <h1 className='text-title font-bold mb-3'>OTP Code Verification</h1>
                    <p className='text-gray text-base'>Enter verification code sent on your email address</p>
                </div>

                <div className='my-8 flex justify-center'>
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        // inputType='number'
                        shouldAutoFocus={true}
                        renderSeparator={<span className='w-5'></span>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            textAlign: 'center',
                            border: "1px solid #70707027",
                            borderRadius: "8px",
                            width: "54px",
                            height: "54px",
                            fontSize: "24px",
                            fontWeight: "500",
                        }}
                        focusStyle={{
                            border: "1px solid #70707027",
                            outline: "none",
                        }}
                    />
                </div>
                <div className='text-center text-textBlue font-medium text-sm mb-14'>
                    Resend Code
                </div>
                <div>
                    <ButtonPrimary type="submit" text='Submit' />
                </div>
            </div>
        </section >
    )
}

export default OTPVerification;