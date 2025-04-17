"use client"

import AuthPagesHeader from '@/components/AuthPagesHeader';
import AuthPagesRightSide from '@/components/AuthPagesRightSide';
import ButtonOne from '@/components/button/ButtonOne';
import { showToast } from '@/components/HotToast';
import InputField from '@/components/inputs/InputField';
import LoadingSpinner from '@/components/LoadingSpinner';
import OTPConfirmModal from '@/components/OTPConfirmModal';
import { registerUser } from '@/features/auth/actions';
import { registerSchema, RegisterType } from '@/features/auth/validations';
import { UserDataProps } from '@/types/base';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

interface RegisterProps {
    data?: RegisterType;
}

const RegisterPage: React.FC<RegisterProps> = ({ data }) => {
    const [isOTPOpen, setIsOTPOpen] = useState(false);
    const [btnIsDisabled, setBtnIsDisabled] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [newUserData, setNewUserData] = useState<UserDataProps>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });
    
    useEffect(() => {
    if (newUserData.first_name === ''
        || newUserData.last_name === ''
        || newUserData.email === ''
        || newUserData.email.length < 5
        || newUserData.password === ''
        || newUserData.password.length < 8 ) {
        setBtnIsDisabled(true);
    } else {
        setBtnIsDisabled(false);
    }
    }, [newUserData]);

    const toggleOTPModal = async () => {
        setIsOTPOpen(prev => !prev);
    };
    
    const cancelEmailVerification = () => {
        // setIsOTPEntered(false);
        setIsOTPOpen(false);
        setTimeout(() => {
            showToast(`Your email address has not been verified!`, 'error');
        }, 500);
    };

    const handlePasswordToggle = () => setIsPasswordOpen(prev => !prev);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
      } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
        defaultValues: data,
    });
    
    const onFormSubmit = handleSubmit(async (data) => {        
        // console.log(data);
        const UserData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        }

        try {
            const {message, success} = await registerUser(UserData);
            // console.log(message, success);
            if (success) {
                toggleOTPModal();
                // localStorage.setItem('userData', JSON.stringify(data));
            }
            setTimeout(() => {
                showToast(`${message}`);
            }, 500);
        } catch (error) {
            setTimeout(() => {
                showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
            }, 500);
        }
    });

  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row '>
        <div className='order-2 md:order-1 w-full md:w-1/2 h-fit py-2 md:h-screen min-h-full flex items-center justify-center'>
            <div className="flex flex-col gap-6 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <AuthPagesHeader />

                <div className="self-start">
                    <h1 className='text-2xl font-semibold'>Sign up</h1>
                    <p className='text-base'>Welcome back! Please enter your details.</p>
                </div>

                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="w-full space-y-2 md:space-y-3">
                        <div className="w-full space-y-3">
                            <div className="w-full">
                                <InputField
                                    {...register("first_name", {
                                        onChange: (e) => {
                                        setNewUserData((prev) => ({ ...prev, first_name: e.target.value }));
                                        },
                                    })}
                                    label="First Name"
                                    error={errors.first_name}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Mikel'
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    {...register("last_name", {
                                        onChange: (e) => {
                                        setNewUserData((prev) => ({ ...prev, last_name: e.target.value }));
                                        },
                                    })}
                                    label="Last Name"
                                    error={errors.last_name}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Adeyemi'
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full">
                                <InputField
                                    {...register("email", {
                                        onChange: (e) => {
                                        setNewUserData((prev) => ({ ...prev, email: e.target.value }));
                                        },
                                    })}
                                    label="Email Address"
                                    error={errors.email}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. mikel.adeyemi@gmail.com'
                                />
                            </div>
                        </div>
                        
                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-full">
                                <InputField
                                    {...register("password", {
                                        onChange: (e) => {
                                          setNewUserData((prev) => ({ ...prev, password: e.target.value }));
                                        },
                                    })}
                                    label='Password'
                                    icon2={!isPasswordOpen ? <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> : <Key style={{fontSize: '19px', }} />}
                                    onClick={handlePasswordToggle}
                                    type={!isPasswordOpen ? 'password' : 'text'}
                                    error={errors.password}
                                    required
                                    classes='w-full'
                                />
                            </div>
                        </div>

                        <ButtonOne
                            type='submit'
                            classes='py-2 px-16 w-full'
                            disabled={isSubmitting || btnIsDisabled}
                            icon1={isSubmitting ? <LoadingSpinner color='text-white' /> : ''}
                            btnText1={isSubmitting ? 'Registering...' : 'Sign up'}
                        />
                        
                        <p className='text-center text-sm'>Already have an account? <Link href='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                    </form>
                </div>
            </div>

            {isOTPOpen && 
            <OTPConfirmModal
                cancelEmailVerification={cancelEmailVerification}
                handleModalToggle={toggleOTPModal}
                emailAddress={newUserData.email} 
                // setIsVerified={setIsVerified} 
            />}
        </div>

        <AuthPagesRightSide />
    </div>
  )
}

export default RegisterPage;