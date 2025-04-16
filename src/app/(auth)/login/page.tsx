"use client"

import AuthPagesHeader from '@/components/AuthPagesHeader';
import AuthPagesRightSide from '@/components/AuthPagesRightSide';
import ButtonOne from '@/components/button/ButtonOne';
import { showToast } from '@/components/HotToast';
import InputField from '@/components/inputs/InputField';
import LoadingSpinner from '@/components/LoadingSpinner';
import { loginUser } from '@/features/auth/actions';
import { loginSchema, LoginType } from '@/features/auth/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

interface LoginProps {
    data?: LoginType;
}

const LoginPage: React.FC<LoginProps> = ({ data }) => {
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handlePasswordToggle = () => setIsPasswordOpen(prev => !prev);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: data,
    });
    
    const onFormSubmit = handleSubmit(async (data) => {
        try {
            setIsLoading(true);
            const res = await loginUser(data.email, data.password);
            
            if (res.success) {
                const { access_token, user } = res.data;
                sessionStorage.setItem("accessToken", access_token);
                sessionStorage.setItem("role", user.role);
                    
                localStorage.setItem('loggedInUserInfo', JSON.stringify({
                    email: user.email,
                    name: user.name,
                }));
                
                setIsLoading(false);
                router.push('/dashboard');
            }

            setTimeout(() => {
                showToast(`${res.message}`);
            }, 500);            
        } catch (error) {
            // console.log((error as Error).message);
            setIsLoading(false);
            setTimeout(() => {
                showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
            }, 500);            
        }
    });

    // if (isLoading) {
    //     return <Loading />;
    // };

  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row '>
        <Toaster position="top-center" reverseOrder={false} />
        <div className='order-2 md:order-1 w-full md:w-1/2 h-fit py-8 md:h-screen min-h-full flex items-center justify-center'>
            <div className="flex flex-col gap-6 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <AuthPagesHeader />

                <div className="self-start">
                    <h1 className='text-2xl font-semibold'>Log in</h1>
                    <p className='text-base'>Welcome back! Please enter your details.</p>
                </div>

                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="w-full space-y-3">
                        <div className="w-full flex-col">
                            <InputField
                                {...register("email")}
                                label="Email Address"
                                error={errors.email}
                                required
                                classes='w-full'
                                placeholderText='eg. mikel.adeyemi@gmail.com'
                            />
                        </div>
                        
                        <div className="w-full mb-3 flex-col">
                            <InputField
                                label='Password'
                                icon2={!isPasswordOpen ? <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> : <Key style={{fontSize: '19px', }} />}
                                onClick={handlePasswordToggle}
                                type={!isPasswordOpen ? 'password' : 'text'}
                                {...register("password")}
                                error={errors.password}
                                required
                                classes='w-full'
                            />
                        </div>

                        <div className='my-2 w-full flex items-center justify-end'>
                            <Link href='/forgot-password' className='text-red-600 text-sm'>Forgot password</Link>
                        </div>
                        <ButtonOne
                            type='submit'
                            classes='py-2 px-16 w-full'
                            disabled={isLoading}
                            icon1={isLoading ? <LoadingSpinner color='text-white' /> : ''}
                            btnText1={isLoading ? 'Logging...' : 'Login'}
                        />
                        
                        <p className='text-center text-sm'>Don&apos;t have an account? <Link href='/register' className='text-blue-600 font-semibold'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>

        <AuthPagesRightSide />
    </div>
  )
}

export default LoginPage;