"use client";

import { AssuredWorkload } from '@mui/icons-material';
import ButtonNeutral from '../button/ButtonNeutral';
import ButtonOne from '../button/ButtonOne';
import InputField from '../inputs/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { parseAmountIntoNumberFormat, parseFormattedAmountToNumber } from '@/utils/formatters';
import { paystackFundingInitializationSchema, PaystackFundingInitializationType } from '@/features/banking/validations';
import { showToast } from '../HotToast';
import { initialisePaystackFunding } from '@/features/banking/actions';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../LoadingSpinner';
import { useRouter } from 'next/navigation';
import { useGeneralData } from '@/stores/useGeneralData';

interface FundsProps {
    data?: PaystackFundingInitializationType,
    handleModalToggle: () => void,
    whichModal: string
}

const FundsModal = ({ data, handleModalToggle, whichModal }: FundsProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [inputAmount, setInputAmount] = useState('');
    const [whichTransferType, setWhichTransferType] = useState('');

    const currentData = useGeneralData((state) => state.currentData);
    const setCurrentData = useGeneralData((state) => state.setCurrentData);
    
    const router = useRouter();

    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedValue = parseAmountIntoNumberFormat(e.target.value);
      setInputAmount(`₦${formattedValue}`);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<PaystackFundingInitializationType>({
        resolver: zodResolver(paystackFundingInitializationSchema),
        defaultValues: data,
    });
        
    const onFormSubmit = handleSubmit(async (data) => {
        // console.log(data);
        setIsLoading(true);
        const token = sessionStorage.getItem("accessToken");
        try {
            const parsedAmount = parseFormattedAmountToNumber(inputAmount);
            if (!isNaN(parsedAmount) && parsedAmount > 0) {
                const updatedData: PaystackFundingInitializationType = {
                ...data,
                amount: parsedAmount.toString(),
                };
                // console.log(updatedData);

                if (!token) {
                    showToast("You are unauthorized!", "error");

                    setTimeout(() => {
                        return router.push('/');
                    }, 500);
                } else {
                    const updatedAmount = parseInt(updatedData.amount);
                    const res = await initialisePaystackFunding(token, {
                        amount: updatedAmount,
                        callback_url: `${process.env.NEXT_PUBLIC_PAYSTACK_CALLBACK_URL}`,
                    });
                    console.log(res.data)
                    if (res.success) {
                        showToast(`${res.message}`);
                        window.location.href = res.data.authorization_url;
                    } else {
                        showToast('Something went wrong! Could not finish initialization of paystack funding.', 'error');
                    }
                }
            }
        // handleModalToggle();
        } catch (error) {
            setTimeout(() => {
                showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
            }, 500);
        } finally {
            setIsLoading(false);
        }
    });
    // console.log(`${process.env.NEXT_PUBLIC_PAYSTACK_CALLBACK_URL}`);

    const handleTransactionTypeSubmit = () => {
        if (whichModal === 'Transfer') {
            // console.log(whichTransferType);
            if (whichTransferType === 'NGN2NGN') {
                setCurrentData({ ...currentData, currentTab: '/ngn-ngn-transfer' });
            }
            if (whichTransferType === 'NGN2Foreign') {
                setCurrentData({ ...currentData, currentTab: '/ngn-foreign-transfer' });
            }

            handleModalToggle();
        }
    }

    return (
        <section className="fixed inset-0 -top-10 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-white md:w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
                {whichModal === 'Fund Wallet' && 
                <form onSubmit={onFormSubmit} className="w-full p-6 flex flex-col items-start justify-between gap-4 rounded-radius-12">
                    <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                        <span className='text-green-600 text-2xl font-bold'>₦</span>
                    </div>

                    <div className='pt-3 pb-5 space-y-4 mx-auto'>
                        <p className='text-lg md:text-xl text-center font-semibold'>How much do you want to fund your wallet with?</p>
                        <InputField
                            {...register("amount")}
                            type='text'
                            placeholder='₦0.00'
                            error={errors.amount}
                            value={inputAmount}
                            required
                            classes='w-full'
                            onChange={onCodeChange}
                            className='placeholder:text-center placeholder:text-xl text-xl py-2 px-3 text-center w-full rounded-xl'
                        />
                    </div>

                    <div className="w-full flex items-center justify-center gap-3">
                        <ButtonNeutral onClick={handleModalToggle} classes='py-2 px-8 text-sm border rounded-xl' btnText1='Cancel' />
                        <ButtonOne 
                            type='submit'
                            classes='py-2 px-8 text-sm'
                            disabled={isLoading}
                            icon1={isLoading ? <LoadingSpinner color='text-white' /> : ''}
                            btnText1={`${isLoading ? 'Processing...' : 'Continue'}`}
                        />
                    </div>
                </form>
                }
                

                {whichModal === 'Transfer' && 
                <div className="w-full p-6 flex flex-col items-start justify-between gap-4 rounded-radius-12">
                    <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                        <span className='text-green-600'><AssuredWorkload /></span>
                    </div>

                    <div className='pt-3 pb-5 space-y-4 mx-auto'>
                        <p className='text-lg md:text-xl text-center font-semibold'>How much do you want to transfer?</p>
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="transferType"
                                    id="NGN2NGN"
                                    value={'NGN2NGN'}
                                    onChange={(e) => setWhichTransferType(e.target.value)}
                                />
                                <label htmlFor="NGN2NGN">NGN - NGN</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="transferType"
                                    id="NGN2Foreign"
                                    value={'NGN2Foreign'}
                                    onChange={(e) => setWhichTransferType(e.target.value)}
                                />
                                <label htmlFor="NGN2Foreign">NGN - Foreign</label>
                            </div>
                        </div>
                        <p className='text-center flex items-end justify-between gap-3'>
                            <span className=''>Selected Transfer Type:</span>
                            <span className='flex-1 border h-7 rounded-radius-8 bg-blue-50 font-semibold'>{whichTransferType}</span>
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-3">
                        <ButtonNeutral onClick={handleModalToggle} classes='py-2 px-8 text-sm border rounded-xl' btnText1='Cancel' />
                        <ButtonOne onClick={handleTransactionTypeSubmit} classes='py-2 px-8 text-sm' btnText1='Continue' />
                    </div>
                </div>}

            </div>
        </section>
    );
};

export default FundsModal;
