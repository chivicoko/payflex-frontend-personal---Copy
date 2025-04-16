'use client';

import ButtonOne from '@/components/button/ButtonOne';
import InputOne from '@/components/inputs/InputOne';
import LoadingSpinner from '@/components/LoadingSpinner';
import { InternetDataPlanProps } from '@/types/base';
import { parseAmountIntoNumberFormat } from '@/utils/formatters';
import Image from 'next/image';

interface FormProps {
    handleSubmit: (e: React.FormEvent) => Promise<void>
    setSelectedPlan: React.Dispatch<React.SetStateAction<InternetDataPlanProps | null>>
    selectedPlan: InternetDataPlanProps | null
    loading: boolean
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    phoneNumber: string
    selectedPlanAmount: { integerPart: number; decimalPart: number } | null
    isSubmitting: boolean
    selectedProviderLogo: string | null
}

const FormWrapper = ({
    handleSubmit,
    selectedPlan,
    setSelectedPlan,
    loading,
    setPhoneNumber,
    phoneNumber,
    selectedPlanAmount,
    isSubmitting,
    selectedProviderLogo }: FormProps) => {

  return (
    <div className='w-full sm:w-96 rounded-radius-12 px-6 pb-6 pt-10 mx-auto bg-white border border-customGray space-y-3'>
        <div className="flex items-center gap-2">
            <span className="relative size-16 mb-2 rounded-lg border">
                <Image
                    src={selectedProviderLogo !== null ? selectedProviderLogo : '/images/imagePlaceholder.jpeg'}
                    alt="logo"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </span>
            <h2 className='text-xl font-semibold pb-4'>Internet Data Provider</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="w-full space-y-3">
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-semibold'>{selectedPlan && selectedPlan.name}</span>
                    <span className='text-sm font-semibold'>-</span>
                    {selectedPlanAmount && <span className='text-sm font-semibold'>
                        ₦{parseAmountIntoNumberFormat(selectedPlanAmount.integerPart.toString())+'.'+selectedPlanAmount.decimalPart}
                    </span>}
                </div>
                <div className="w-full">
                    <InputOne required={true} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} name="phoneNumber" placeholderText='Enter phone number' />
                    {/* {amountError && <p className='text-center text-xs text-red-700'>{amountError}</p>} */}
                </div>

                <ButtonOne
                    type='submit'
                    btnText1={isSubmitting ? 'Processing...' : 'Buy Internet Data'}
                    disabled={loading}
                    icon1={loading ? <LoadingSpinner color='text-white' /> : ''}
                    classes={`w-full py-2 px-3 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none`}
                />
            </div>
        </form>
        
        <button type="button" onClick={() => setSelectedPlan(null)} className="text-sm text-gray-500 underline mt-2">Change Plan</button>
    </div>
  )
}

export default FormWrapper;