"use client"

// import Loading from '@/app/loading';
import AuthPagesHeader from '@/components/AuthPagesHeader';
import AuthPagesRightSide from '@/components/AuthPagesRightSide';
import ButtonOne from '@/components/button/ButtonOne';
import { showToast } from '@/components/HotToast';
import InputField from '@/components/inputs/InputField';
// import InputSelectField from '@/components/inputs/InputSelectField';
import LoadingSpinner from '@/components/LoadingSpinner';
import OTPConfirmModal from '@/components/OTPConfirmModal';
import { registerUser } from '@/features/auth/actions';
import { registerSchema, RegisterType } from '@/features/auth/validations';
import { UserDataProps } from '@/types/base';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

interface RegisterProps {
    data?: RegisterType;
}

const RegisterPage: React.FC<RegisterProps> = ({ data }) => {
    const [isOTPOpen, setIsOTPOpen] = useState(false);
    // const [isOTPEntered, setIsOTPEntered] = useState(false);
    // const [isVerified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [emailAddress, setEmailAddress] = useState('');
    const [btnIsDisabled, setBtnIsDisabled] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [newUserData, setNewUserData] = useState<UserDataProps>({
        first_name: '',
        last_name: '',
        email: '',
        // phone_number: '',
        password: '',
        // confirm_password: '',
    });

    // const router = useRouter();
    
    useEffect(() => {
    if (newUserData.first_name === ''
        || newUserData.last_name === ''
        || newUserData.email === ''
        || newUserData.email.length < 5
        // || newUserData.phone_number === ''
        // || newUserData.phone_number.length < 8
        || newUserData.password === ''
        || newUserData.password.length < 8
        // || newUserData.confirm_password === ''
        // || newUserData.confirm_password.length < 8
        // || newUserData.confirm_password !== newUserData.password
        || isLoading) {
        setBtnIsDisabled(true);
    } else {
        setBtnIsDisabled(false);
        setIsLoading(false);
    }
    }, [newUserData, isLoading]);

    const toggleOTPModal = async () => {
        setIsOTPOpen(prev => !prev);

        // if (!isOTPOpen) {
        //     try {
        //         setIsLoading(true);
        //         const res = await requestEmailOTP(newUserData.email);
        //         setIsLoading(false);
        //         setIsOTPOpen(true);
                
        //         setTimeout(() => {
        //             showToast(`${res.message}`);
        //         }, 500);
        //     } catch (error) {
        //         setIsLoading(false);
        //         setTimeout(() => {
        //             showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
        //         }, 500);
        //     }
        // } else {
        //     setIsOTPOpen(false);
        // }
    };

    // const verifyEmail = async () => {
    //     if (!isOTPOpen) {
    //         try {
    //             setIsLoading(true);
    //             const res = await requestEmailOTP(newUserData.email);
    //             setIsLoading(false);
    //             setIsOTPOpen(true);
                
    //             setTimeout(() => {
    //                 showToast(`${res.message}`);
    //             }, 500);
    //         } catch (error) {
    //             setIsLoading(false);
    //             setTimeout(() => {
    //                 showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
    //             }, 500);
    //         }
    //     } else {
    //         setIsOTPOpen(false);
    //     }
    // };
    
    
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
            // phone_number: data.phone_number,
            // address: {
            //     country: data.country,
            //     state: data.state,
            //     city: data.city,
            //     home_address: data.home_address,
            // },
            // gender: data.gender,
            // date_of_birth: data.date_of_birth,
            password: data.password,
            // confirm_password: data.confirm_password,
        }

        // setNewUserData({
        //     first_name: data.first_name,
        //     last_name: data.last_name,
        //     email: data.email,
        //     // phone_number: data.phone_number,
        //     password: data.password,
        //     // confirm_password: data.confirm_password,
        // })

        try {
            const {message, success} = await registerUser(UserData);
            // console.log(data, message, success);
            if (success) {
                toggleOTPModal();
                setTimeout(() => {
                    showToast(`${message}`);
                }, 500);
                // localStorage.setItem('userData', JSON.stringify(data));
            }
        } catch (error) {
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
                        {/* <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3"> */}
                            <div className="w-full">
                                <InputField
                                    {...register("first_name")}
                                    onChange={(e) => setNewUserData({...newUserData, first_name: e.target.value})}
                                    label="First Name"
                                    error={errors.first_name}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Mikel'
                                />
                            </div>
                            <div className="w-full">
                                <InputField
                                    {...register("last_name")}
                                    onChange={(e) => setNewUserData({...newUserData, last_name: e.target.value})}
                                    label="Last Name"
                                    error={errors.last_name}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Adeyemi'
                                />
                            </div>
                        </div>

                        <div className="w-full">
                        {/* <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3"> */}
                            
                            <div className="w-full">
                                <InputField
                                    {...register("email")}
                                    onChange={(e) => setNewUserData({...newUserData, email: e.target.value})}
                                    label="Email Address"
                                    error={errors.email}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. mikel.adeyemi@gmail.com'
                                />
                            </div>

                            {/* <div className="w-full md:w-1/2">
                                <InputField
                                    disabled={isVerified}
                                    {...register("email")}
                                    label="Email Address"
                                    // error={errors.email}
                                    required
                                    value={emailAddress}
                                    onChange={(e) => setEmailAddress(e.target.value)}
                                    classes='w-full'
                                    placeholderText='eg. mikel.adeyemi@gmail.com'
                                />
                                {
                                // (emailAddress && !errors.email && !isOTPEntered) && 
                                (emailAddress && !isOTPEntered) && 
                                <div className="flex items-center justify-between">
                                    <p className='text-center text-xs text-neutral-600'>Click the &apos;verify&apos; button to verify email</p>
                                    <button type='button' onClick={toggleOTPModal} className='px-2 text-sm underline'>Verify</button>
                                </div>
                                }
                            </div> */}

                            {/* <div className={`${emailAddress ? 'mb-4' : ''} w-full md:w-1/2`}> */}
                            {/* <div className={`w-full`}>
                                <InputField
                                    {...register("phone_number")}
                                    onChange={(e) => setNewUserData({...newUserData, phone_number: e.target.value})}
                                    label="Phone Number"
                                    error={errors.phone_number}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. +2348037746378'
                                />
                            </div> */}
                        </div>
                        
                        {/* <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                            <div className="w-full md:w-1/3">
                                <InputField
                                    {...register("city")}
                                    label="City"
                                    error={errors.city}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Lagos'
                                />
                            </div>
                            <div className="w-full md:w-1/3">
                                <InputField
                                    {...register("state")}
                                    label="State"
                                    error={errors.state}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Lagos'
                                />
                            </div>
                            <div className="w-full md:w-1/3">
                                <InputField
                                    {...register("country")}
                                    label="Country"
                                    error={errors.country}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Nigeria'
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <InputField
                                {...register("home_address")}
                                label="Home Address"
                                error={errors.home_address}
                                required
                                classes='w-full'
                                placeholderText='eg. No.7 Azikiwe Close, Maitama Abuja Nigeria'
                            />
                        </div>

                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-1/2">
                                <InputSelectField
                                    {...register("gender")}
                                    placeholderText='Select your gender'
                                    defaultValue={data?.gender}
                                    label="Gender"
                                    name="gender"
                                    error={errors.gender}
                                    valueArray={["male", "female"]}
                                />
                            </div>
                            <div className="w-1/2">
                                <InputField
                                    type='date'
                                    {...register("date_of_birth")}
                                    placeholder="dd-mm-yyyy"
                                    label="Date of Birth"
                                    error={errors.date_of_birth}
                                />
                            </div>
                        </div> */}

                        <div className="w-full flex items-center gap-2 md:gap-3">
                            <div className="w-full">
                                {/* <InputField
                                    type="password"
                                    {...register("password")}
                                    onChange={(e) => setNewUserData({...newUserData, password: e.target.value})}
                                    error={errors.password}
                                    label="Password"
                                    required
                                    classes='w-full'
                                    /> */}
                                <InputField
                                    label='Password'
                                    icon2={!isPasswordOpen ? <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> : <Key style={{fontSize: '19px', }} />}
                                    onClick={handlePasswordToggle}
                                    type={!isPasswordOpen ? 'password' : 'text'}
                                    {...register("password")}
                                    onChange={(e) => setNewUserData({...newUserData, password: e.target.value})}
                                    error={errors.password}
                                    required
                                    classes='w-full'
                                />
                            </div>
                            {/* <div className="w-1/2">
                                <InputField
                                    type="password"
                                    {...register("confirm_password")}
                                    onChange={(e) => setNewUserData({...newUserData, confirm_password: e.target.value})}
                                    label="Confirm Password"
                                    error={errors.confirm_password}
                                    required
                                    classes='w-full'
                                />
                            </div> */}
                        </div>

                        <ButtonOne
                            type='submit'
                            classes='py-2 px-16 w-full'
                            disabled={isSubmitting || btnIsDisabled}
                            icon1={isSubmitting ? <LoadingSpinner color='text-white' /> : ''}
                            btnText1={isSubmitting ? 'Registering...' : 'Sign up'}
                        />
                        
                        <p className='text-center text-sm'>Already have an account? <Link href='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                        
                        {/* <div className='my-2 w-full flex items-center justify-center'>
                            <button onClick={verifyEmail} className='text-sm'>
                                <span className='text-blue-700 underline'>Verify Email with OTP</span> if you have not.
                            </button>
                        </div> */}
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