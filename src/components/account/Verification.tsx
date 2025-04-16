'use client';

import React, { useEffect, useState } from 'react'
import ButtonOne from '../button/ButtonOne';
import { Edit, Save, ShieldOutlined, TaskOutlined } from '@mui/icons-material';
import InputField from '../inputs/InputField';
import { showToast } from '../HotToast';
import SelectInputField from '../inputs/InputSelectField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { kycSchema, KYCType } from '@/features/dashboard/validations';
import { updateKYC } from '@/features/dashboard/actions';
import ButtonNeutral from '../button/ButtonNeutral';
import LoadingSpinner from '../LoadingSpinner';
import { useUserData } from '@/hooks/useUserData';
import StatusHandler from '../shared/StatusHandler';
import { useAuthToken } from '@/hooks/useAuthToken';
import { idTypes } from '@/data/base';

interface ProfileProps {
    data?: KYCType;
}

const Verification: React.FC<ProfileProps> = ({ data }) => {
    const [inputDisabled, setInputDisabled] = useState(true);
    const [inputMode, setInputMode] = useState<string>('editable');

    const token = useAuthToken();
        
    const handleEditForm = () => {
        setInputMode('');
        setInputDisabled(false);
    }
    
    const {
        userProfileData,
        isPending,
        hasError,
        refetchProfile,
        refetchDashboard
    } = useUserData();

    const { user_kyc_data } = userProfileData || {};

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<KYCType>({
        resolver: zodResolver(kycSchema),
        defaultValues: data,
    });
    
    useEffect(() => {
        if (user_kyc_data || inputMode !== 'editable') {
            reset({
                id_type: user_kyc_data?.id_type || '',
                id_no: user_kyc_data?.id_number || '',
            });
        }
    }, [inputMode, user_kyc_data, reset]);

    const onFormSubmit = handleSubmit(async (data) => {
        const UserData = {
            id_type: data.id_type,
            id_no: data.id_no,
        }

        if (token) {
            try {
                const res = await updateKYC(token, UserData);
                if (res.success) {
                    setTimeout(() => {
                        showToast(`${res.message}` || "KYC information updated successfully");
                    }, 500);
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
    
    // Checking loading state and error state
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
            <div className="w-full flex items-center justify-between gap-3 flex-wrap pb-8">
                <div className='flex items-center gap-2'>
                    <ShieldOutlined className='text-primary' />
                    <h2 className='text-xl font-semibold'>Identity Verification (KYC)</h2>
                </div>

                <div className="flex items-center gap-2">
                    {user_kyc_data?.id_number === '' ? inputMode === 'editable' ?
                    <ButtonNeutral
                        onClick={handleEditForm}
                        classes='py-2 px-8 font-semibold space-x-2 border hover:border-primary hover:text-primary rounded-radius-12 w-full sm:w-fit transition-all duration-300 ease-in-out'
                        btnText1='Edit Profile'
                        icon1={<Edit style={{fontSize: '17px'}} />}
                    /> :
                    <ButtonOne
                        type='submit'
                        classes='py-2 px-8 font-semibold w-full sm:w-fit'
                        disabled={isSubmitting}
                        icon1={isSubmitting ? <LoadingSpinner color='text-white' /> : <Save style={{fontSize: '17px'}} />}
                        btnText1={isSubmitting ? 'Updating...' : 'Update KYC'}
                    /> 
                    : null}
                </div>
            </div>
            
            <div className="w-full sm:w-96 mx-auto space-y-3 md:space-y-5">
                <div className="w-full">
                    <SelectInputField
                        valueArray={idTypes}
                        {...register("id_type")}
                        label="ID Type"
                        error={errors.id_type}
                        disabled={inputDisabled}
                        mode={inputMode}
                        classes={`w-full`}
                        placeholderText={'Select ID Type'}
                    />
                </div>
                <div className="w-full">
                    <InputField
                        {...register("id_no")}
                        label="ID Number"
                        error={errors.id_no}
                        disabled={inputDisabled}
                        mode={inputMode}
                        classes={`w-full`}
                        placeholderText={'Enter your ID number'}
                    />
                </div>
                <div className="text-primary w-full flex items-start gap-3 p-5 bg-blue-50 border border-blue-100 rounded-radius-12">
                    <TaskOutlined />
                    <p className=''>Your identity information is securely stored and encrypted. We only use this information for verification purposes as required by regulations.</p>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Verification;