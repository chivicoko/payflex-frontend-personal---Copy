'use client';

import { Edit, HomeOutlined, PersonOutlined, Save } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import InputField from '../inputs/InputField';
import ButtonOne from '../button/ButtonOne';
import { showToast } from '../HotToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { profileSchema, ProfileType } from '@/features/dashboard/validations';
import { updateProfile } from '@/features/dashboard/actions';
import ButtonNeutral from '../button/ButtonNeutral';
import LoadingSpinner from '../LoadingSpinner';
import { useGeneralData } from '@/stores/useGeneralData';
import { useUserData } from '@/hooks/useUserData';
import StatusHandler from '../shared/StatusHandler';
import { useAuthToken } from '@/hooks/useAuthToken';

interface ProfileProps {
    data?: ProfileType;
}

const Profile: React.FC<ProfileProps> = () => {
    const [inputDisabled, setInputDisabled] = useState(true);
    const [inputMode, setInputMode] = useState<string>('editable');

    const loggedInUser = useGeneralData((state) => state.loggedInUser);
    const token = useAuthToken();

    const {userProfileData, isPending, hasError, refetchProfile, refetchDashboard} = useUserData();
    const { profile_data, addres } = userProfileData || {};

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset
    } = useForm<ProfileType>({resolver: zodResolver(profileSchema),});

    useEffect(() => {
        if ((profile_data && addres) || inputMode !== 'editable') {
            reset({
                first_name: profile_data?.first_name || '',
                last_name: profile_data?.last_name || '',
                home_address: addres?.house_address || '',
                house_number: addres?.house_no || '',
                city: addres?.city || '',
                state: addres?.state || '',
                country: addres?.country || '',
                postal_code: addres?.postal_code || '',
            });
        }
    }, [inputMode, profile_data, addres, reset]);

    const handleEditForm = () => {
        setInputMode('');
        setInputDisabled(false);
    }
    
    const onFormSubmit = handleSubmit(async (data) => {
        const UserData = {
            first_name: data.first_name,
            last_name: data.last_name,
            home_address: data.home_address,
            city: data.city,
            state: data.state,
            country: data.country,
            postal_code: data.postal_code,
            house_number: data.house_number,
        }

        if (token) {
            try {
                const res = await updateProfile(token, UserData);
                // console.log(res);
                if (res.success) {
                    const { data } = res;
                    setTimeout(() => {
                        showToast(`${res.message}` || 'Profile updated successfully');
                    }, 500);
                    
                    localStorage.setItem('loggedInUserInfo', JSON.stringify({
                        ...loggedInUser,
                        name: `${data.first_name} ${data.last_name}`,
                    }));
                }
    
                await refetchProfile();
                await refetchDashboard();
                setInputMode('editable');
                setInputDisabled(true);
            } catch (error) {
                setTimeout(() => {
                    showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
                }, 500);
            }
        }
    });

    if (isPending || !!hasError) return (
      <StatusHandler
        isLoading={isPending}
        isError={!!hasError}
        errorMessage="Failed to load providers. Please try again."
      />
    );
    
  return (
    <form onSubmit={onFormSubmit} className='py-3 divide-y'>
        <div className='py-6 px-5'>
            <div className="w-full flex items-center justify-between gap-3 pb-5">
                <div className='flex items-center gap-2'>
                    <PersonOutlined className='text-primary' />
                    <h2 className='text-xl font-semibold'>Personal Information</h2>
                </div>
                
                <div className="flex items-center gap-2">
                    {inputMode === 'editable' ?
                    <ButtonNeutral
                        onClick={handleEditForm}
                        classes='py-2 px-8 font-semibold space-x-2 border hover:border-primary hover:text-primary rounded-radius-12 w-full sm:w-fit transition-all duration-300 ease-in-out'
                        btnText1='Edit Profile'
                        icon1={<Edit style={{fontSize: '17px'}} />}
                    /> : 
                    <ButtonOne
                        type='submit'
                        classes='py-2 px-8 font-semibold w-full sm:w-fit'
                        btnText1={isSubmitting ? 'Saving...' : 'Save Profile'}
                        disabled={isSubmitting}
                        icon1={isSubmitting ? <LoadingSpinner color='text-white' /> : <Save style={{fontSize: '17px'}} />}
                    />}
                </div>
            </div>
            
            <div className="w-full space-y-3 md:space-y-5">
                <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("first_name")}
                            label="First Name"
                            error={errors.first_name}
                            disabled={inputDisabled}
                            mode={inputMode}
                            classes={`w-full`}
                            placeholderText='Enter your first name'
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <InputField
                            mode={inputMode}
                            {...register("last_name")}
                            disabled={inputDisabled}
                            label="Last Name"
                            error={errors.last_name}
                            classes={`w-full`}
                            placeholderText='Enter your last name'
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='py-6 px-5'>
            <div className='flex items-center gap-2 pb-3'>
                <HomeOutlined className='text-primary' />
                <h2 className='text-xl font-semibold'>Address Information</h2>
            </div>
            
            <div className="w-full space-y-3 md:space-y-5">
                <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("home_address")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="Home Address"
                            error={errors.home_address}
                            classes={`w-full`}
                            placeholderText='Enter your home address'
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("house_number")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="House Number"
                            error={errors.house_number}
                            classes={`w-full`}
                            placeholderText='Enter your house number'
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("city")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="City"
                            error={errors.city}
                            classes={`w-full`}
                            placeholderText='Enter your city'
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("state")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="State/Province"
                            error={errors.state}
                            classes={`w-full`}
                            placeholderText='Enter your state'
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("postal_code")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="Postal Code"
                            error={errors.postal_code}
                            classes={`w-full`}
                            placeholderText='Enter your postal code'
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <InputField
                            {...register("country")}
                            mode={inputMode}
                            disabled={inputDisabled}
                            label="Country"
                            error={errors.country}
                            classes={`w-full`}
                            placeholderText='Enter your country'
                        />
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Profile;