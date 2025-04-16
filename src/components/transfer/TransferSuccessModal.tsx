"use client"

import { CheckCircle } from '@mui/icons-material';
// import { useRouter } from 'next/navigation';
import ButtonNeutral from '../button/ButtonNeutral';
import ButtonOne from '../button/ButtonOne';

const TransferSuccessModal = ({handleModalToggle}: {handleModalToggle: () => void}) => {
    // const router = useRouter();

  return (
    <section className="fixed inset-0 -top-10 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
        <div className="bg-white md:w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
            <div className="w-full p-6 flex flex-col items-start justify-between gap-4 rounded-radius-12">
                <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                    <span className='text-green-600'><CheckCircle /></span>
                </div>
            
                <div className='pt-3 pb-5 space-y-3'>
                    <h3 className='text-textGrayDarker text-2xl font-semibold'>Successful Transfer</h3>
                    <p className='text-sm'>Your transfer has been Successfully made</p>
                </div>
                
                <div className="w-full flex items-center justify-end gap-3">
                    <ButtonNeutral onClick={handleModalToggle} classes='py-2 px-8 text-sm border rounded-xl' btnText1='Cancel' />
                    <ButtonOne onClick={handleModalToggle} classes='py-2 px-8 text-sm' btnText1='Continue' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TransferSuccessModal;