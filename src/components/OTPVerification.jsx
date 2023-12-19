import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import ButtonPrimary from './atom/ButtonPrimary';

const OTPVerification = () => {

    const [otp, setOtp] = useState('');

    const handleChange = (code) => setOtp(code);

    return (
        <section className='w-form'>
            <h1 className='text-title font-bold mb-5'>OTP Code Verifivcation</h1>
            <p className='text-gray'>Please check your email to take 4 digit code for continue.</p>

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
                        border: "2px solid #2B2C43",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "24px",
                        fontWeight: "500",
                    }}
                    focusStyle={{
                        border: "2px solid #2B2C43",
                        outline: "none",
                    }}
                />
            </div>
            <div className='text-center text-linkColor text-sm mb-14'>
                Resend Code
            </div>
            <div>
                <ButtonPrimary type="submit" text='Submit' />
            </div>
        </section>
    )
}

export default OTPVerification;