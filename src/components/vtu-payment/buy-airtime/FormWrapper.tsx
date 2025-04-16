'use client';

import ButtonOne from '@/components/button/ButtonOne';
import InputOne from '@/components/inputs/InputOne';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AirtimeProviderProps } from '@/types/base';
import Image from 'next/image';

interface FormProps {
    handleSubmit: (e: React.FormEvent) => Promise<void>
    onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    setSelectedProvider: React.Dispatch<React.SetStateAction<AirtimeProviderProps | null>>
    phoneNumber: string
    amount: string
    isSubmitting: boolean
    selectedProviderLogo: string | null
}

const FormWrapper = ({
    handleSubmit,
    onCodeChange,
    setPhoneNumber,
    setSelectedProvider,
    phoneNumber,
    amount,
    isSubmitting,
    selectedProviderLogo}: FormProps) => {

  return (
    <div className="w-full pt-5">
        <div className='w-full sm:w-96 rounded-radius-12 p-6 mx-auto bg-white border border-customGray space-y-3'>
        <div className="flex items-center gap-2">
            <span className="relative size-16 mb-2 rounded-lg border">
            <Image
                src={selectedProviderLogo !== null ? selectedProviderLogo : "/images/imagePlaceholder.jpeg"}
                alt="logo"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            </span>
            <h2 className='text-xl font-semibold pb-4'>Airtime Provider</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="w-full space-y-3">
                <div className="w-full">
                    <InputOne required={true} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} name="phoneNumber" placeholderText='Enter phone number' />
                    {/* {amountError && <p className='text-center text-xs text-red-700'>{amountError}</p>} */}
                </div>
                <div className="w-full">
                    <InputOne
                        type='number'
                        // onChange={(e) => setAmount(e.target.value)}
                        onChange={onCodeChange}
                        required
                        value={amount}
                        name="amount"
                        placeholderText='Enter amount (₦0.00)'
                    />
                    {/* {amountError && <p className='text-center text-xs text-red-700'>{amountError}</p>} */}
                </div>

                <ButtonOne
                    disabled={isSubmitting}
                    type='submit'
                    btnText1={isSubmitting ? 'Processing...' : 'Buy Airtime'}
                    icon1={isSubmitting ? <LoadingSpinner color='text-white' /> : ''}
                    classes={`w-full py-2 px-3 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none`}
                />
            </div>
        </form>
        
        <button
            type="button"
            onClick={() => setSelectedProvider(null)}
            className="text-sm text-gray-500 underline mt-2"
        >
            Change Provider
        </button>
        </div>
    </div>
  )
}

export default FormWrapper;