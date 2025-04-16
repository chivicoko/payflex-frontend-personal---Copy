'use client';

import ButtonNeutral from '../button/ButtonNeutral'
import ButtonOne from '../button/ButtonOne'
import { CreditCard, KeyboardBackspace } from '@mui/icons-material'
import { VirtualCardProps } from '@/types/base'

interface SingleVirtualProps {
    singleCard: VirtualCardProps,
    goBackToAllCards: () => void
}

const VirtualCardDetails = ({singleCard, goBackToAllCards}: SingleVirtualProps) => {
  return (
    <div className='w-full pr-6'>
        <ButtonNeutral onClick={goBackToAllCards} icon1={<KeyboardBackspace className='text-[16px] group-hover:-translate-x-1 transition-all duration-300 ease-in-out' />} btnText1='Go Back' classes='py-2 px-4 space-x-1 hover:bg-slate-200 rounded-radius-12 group transition-all duration-300 ease-in-out'/>
        
        <div className='w-full grid grid-cols-3 gap-10 pt-2'>
            <div className="col-span-2 border rounded-radius-12 pb-5 px-5 divide-y">
                <div className="space-y-6 py-5 md:pr-12 lg:pr-24">
                <div className='flex items-center gap-2 pt-3 pb-2'>
                    <CreditCard className='text-primary' />
                    <h2 className='text-xl font-semibold'>Card Details</h2>
                </div>
                
                <div className='flex items-end justify-between gap-2'>
                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase text-slate-500'>Card Number</span>
                    <span className='uppercase font-semibold'>{singleCard.cardNumber}</span>
                    </p>

                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase text-slate-500'>Expiry Date</span>
                    <span className='uppercase font-semibold'>{singleCard.expiryDate}</span>
                    </p>
                </div>
                
                <div className='flex items-end justify-between gap-2'>
                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase text-slate-500'>Card Holder</span>
                    <span className='uppercase font-semibold'>{singleCard.cardHolder}</span>
                    </p>

                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase text-slate-500'>CVV</span>
                    <span className='uppercase font-semibold'>{singleCard.cvv || '***'}</span>
                    </p>
                </div>
                </div>

                <div className="space-y-6 py-5">
                <div className='flex items-end justify-between gap-2'>
                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase text-slate-500'>Balance</span>
                    <span className='uppercase text-2xl font-bold'>₦{singleCard.balance}</span>
                    </p>
                </div>

                <div className='space-y-4'>
                    <div className="flex items-center gap-4">
                    <ButtonOne btnText1='Top Up' classes='flex-1 py-2 px-4 transition-all duration-300 ease-in-out font-semibold' />
                    <ButtonNeutral btnText1='Freeze Card' classes='flex-1 py-2 px-4 space-x-1 font-semibold hover:bg-slate-200 border border-slate-400 hover:border-transparent rounded-radius-12 transition-all duration-300 ease-in-out' />
                    </div>

                    <div className="w-full p-5 bg-slate-100 rounded-radius-12">
                    <p className='font-semibold'>Security Tip</p>
                    <p className='text-slate-500'>Never share your CVV or card details with anyone.</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-span-1 py-3 group h-full min-h-full">
                <div
                className={`w-full group-hover:scale-110 transition-all duration-700 ease-in-out space-y-5 p-4 border rounded-radius-12 bg-gradient-to-r ${singleCard.id === 1 ? 'from-blue-600 to-blue-300' : singleCard.id === 2 ? 'from-green-600 to-green-300' : 'from-purple-600 to-purple-300'} text-white`}
                >
                <div className="flex items-center justify-between gap-2">
                    <p className='text-xl font-semibold'>Virtual singleCard</p>
                    <div className="flex items-center gap-1">
                    <div className="size-5 bg-amber-500 rounded-full"></div>
                    <div className="size-5 bg-amber-700 rounded-full"></div>
                    </div>
                </div>

                <p className='text-base'>{singleCard.cardNumber}</p>

                <div className='flex items-end justify-between gap-2'>
                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase font-light text-sm'>CARD HOLDER</span>
                    <span className='uppercase text-sm font-semibold'>{singleCard.cardHolder}</span>
                    </p>
                    <p className='flex flex-col items-start gap-1'>
                    <span className='uppercase font-light text-sm'>EXPIRES</span>
                    <span className='uppercase text-sm font-semibold'>{singleCard.expiryDate}</span>
                    </p>
                    <p className='py-[2px] px-2 rounded-full border text-xs font-semibold'>{singleCard.active ? 'ACTIVE' : 'INACTIVE'}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VirtualCardDetails