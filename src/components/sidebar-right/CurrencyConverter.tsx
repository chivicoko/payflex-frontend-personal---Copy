import React from 'react'
import Image from 'next/image'
import InputOne from '../inputs/InputOne'
import ButtonOne from '../button/ButtonOne'

const CurrencyConverter = () => {
  return (
    <div className='px-4 pt-3 space-y-3'>
        <div className='w-full space-y-1'>
            <div className="flex items-center gap-1">
                <label htmlFor='convertFrom' className="text-sm text-neutral-700">From</label>
                <div className="text-sm px-2 bg-white border border-customGray flex items-center justify-between rounded-radius-4 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
                    <span className={`relative h-4 w-5 rounded-full`}>
                        <Image
                            src={`/images/us.jpg`}
                            alt="Currency's country logo"
                            fill
                            priority
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </span>
                    <select id='convertFrom' name="convertFrom" onChange={(e) => e.target.value} className='px-1 bg-transparent w-full pr-1 outline-none'>
                        <option value="USD">USD</option>
                        <option value="USD">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
            <InputOne type='number' onChange={(e) => e.target.value} name="fromAmount" placeholderText='0.00' />
        </div>
 
        <div className='w-full space-y-1'>
            <div className="flex items-center gap-1">
                <label htmlFor='convertTo' className="text-sm text-neutral-700">To</label>
                <div className="text-sm px-2 bg-white border border-customGray flex items-center justify-between rounded-radius-4 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
                    <span className={`relative h-4 w-5 rounded-full`}>
                        <Image
                            src={`/images/german.webp`}
                            alt="Currency's country logo"
                            fill
                            priority
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </span>
                    <select id='convertTo' name="convertTo" onChange={(e) => e.target.value} className='px-1 bg-transparent w-full pr-1 outline-none'>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="USD">GBP</option>
                    </select>
                </div>
            </div>
            <InputOne type='number' onChange={(e) => e.target.value} name="toAmount" placeholderText='0.00' />
        </div>

        <div className="py-3 px-2 bg-blue-100 rounded-radius-8 space-y-1">
            <div className="text-sm font-semibold flex items-center justify-between">
                <p>Mid-market Fx rate</p>
                <p>€1.00 - $1.41</p>
            </div>
            <div className="text-sm font-semibold flex items-center justify-between">
                <p>Our Fx fee</p>
                <p>€0.00</p>
            </div>
        </div>

        <ButtonOne btnText1='Convert' classes='w-full py-2 transition-all duration-300 ease-in-out' />
    </div>
  )
}

export default CurrencyConverter