"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ButtonOne from './button/ButtonOne';
import { ErrorOutline, Restore } from '@mui/icons-material';
import ButtonNeutral from './button/ButtonNeutral';
import { usePathname, useRouter } from 'next/navigation';
import { requestEmailOTP, resetPassword, verifyEmail, verifyPasswordReset } from '@/features/auth/actions';
import Loading from '@/app/loading';
import { useForm } from 'react-hook-form';
import { otpSchema, OTPType } from '@/features/auth/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { showToast } from './HotToast';
import InputFieldFloatingLabel from './inputs/InputFieldFloatingLabel';
import { Toaster } from 'react-hot-toast';

interface OtpProps {
    data?: OTPType,
    handleModalToggle: () => void,
    cancelEmailVerification: () => void,
    emailAddress: string,
    isVerified?: boolean,
    setIsVerified?: Dispatch<SetStateAction<boolean>>,
}

// const OTPConfirmModal = ({data, handleModalToggle, cancelEmailVerification, emailAddress}: OtpProps) => {
const OTPConfirmModal = ({data, handleModalToggle, cancelEmailVerification, emailAddress}: OtpProps) => {
    const [otpTime, setOTPTime] = useState(60);
    const [otpCode, setOTPCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const interval = setInterval(() => {
            if (otpTime > 0) {
                setOTPTime(prev => prev-1);
            }
        }, 1000)
        return () => clearInterval(interval);
    }, [otpTime, otpCode]);

    const resendOTP = async () => {
        setOTPTime(60);

        try {
            if (pathName === '/register') {
                const res = await requestEmailOTP(emailAddress);
                if (res.success) {
                    showToast(`${res.message}`);
                }
            }
            
            if (pathName === '/forgot-password') {
                const res = await resetPassword(emailAddress);
                if (res.success) {
                    showToast(`${res.message}`);
                }   
            }
            
            const interval = setInterval(() => {
                if (otpTime > 0) {
                    setOTPTime(prev => prev-1);
                }
            }, 1000)
            return () => clearInterval(interval);
        } catch (error) {
            showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
            setIsLoading(false);
        }
    }
    
    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => setOTPCode(e.target.value);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<OTPType>({
        resolver: zodResolver(otpSchema),
        defaultValues: data,
    });
    
    const onFormSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        try {
            if (pathName === '/register') {
                const {success, message} = await verifyEmail(emailAddress, data.otp_code);
                // console.log(success, message);

                if (success) {
                    setIsLoading(false);
                    showToast(`${message}`);
                    // setIsVerified(true);
                    handleModalToggle();
                    router.push('/login');
                }
            }
            
            if (pathName === '/forgot-password') {
                const {success, message} = await verifyPasswordReset(emailAddress, data.otp_code);
                
                if (success) {
                    setIsLoading(false);
                    // setIsVerified(true);
                    handleModalToggle();
                    router.push('/change-password');
                }
                    
                setTimeout(() => {
                    showToast(`${message}`);
                }, 500);
            };
        } catch (error) {
            setIsLoading(false);
            showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
        }
    });

    if (isLoading) {
        return <Loading />;
    };

  return (
    <section className="fixed inset-0 -top-5 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={onFormSubmit} className="bg-white w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
            <div className="w-full p-6 flex flex-col items-start justify-between gap-4 rounded-radius-12">
                <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                    <span className='text-yellow-500'><ErrorOutline /></span>
                </div>
            
                <div className='pt-3 pb-5 space-y-3'>
                    <h3 className='text-textGrayDarker text-2xl font-semibold'>Enter OTP</h3>
                    <p className='text-sm'>A confirmation code has been sent to your email address at <strong>{emailAddress || 'my.info@example.com'}</strong></p>
                    <div className="w-full space-y-2">
                        <InputFieldFloatingLabel
                            {...register("otp_code")}
                            floatingLabel="OTP Code"
                            error={errors.otp_code}
                            required
                            classes='w-full'
                            onChange={onCodeChange}
                            className='placeholder:text-center placeholder:text-xs placeholder:text-red-700'
                        />
                        <div className="w-full flex items-center justify-start gap-2">
                            <p className='flex-1 flex items-center justify-between gap-3'>
                                {otpTime === 0 ?
                                <>
                                    <span>Didn&apos;t get OTP?</span>
                                    <button onClick={resendOTP} className='cursor-pointer text-textGrayDarker underline flex items-center gap-1 text-sm font-semibold'>
                                        <Restore style={{fontSize: '16px'}} />
                                        Resend
                                    </button>
                                </>
                                : 
                                <span>_<strong>{otpTime === 60 ? '01:00' : otpTime}</strong></span>}
                                {/* <span>Confirmation code expires in <strong>{otpTime === 60 ? '01:00' : <CountDownTimer/>}</strong></span>} */}
                            </p>
                        </div>
                    </div>

                </div>
                
                <div className="w-full flex items-center justify-end gap-3">
                    <ButtonNeutral onClick={cancelEmailVerification} classes='py-2 px-8 text-sm border rounded-radius-8' btnText1='Cancel' />
                    <ButtonOne type='submit' classes='py-2 px-8 text-sm' btnText1='Verify' />
                </div>
            </div>
        </form>
    </section>
  )
}

export default OTPConfirmModal;