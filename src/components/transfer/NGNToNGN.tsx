'use client';

import React, { useEffect, useRef, useState } from 'react'
import InputOne from '../inputs/InputOne'
import { availableBankOptions } from '../../data/base';
import TextAreaTwo from '../inputs/TextAreaTwo';
import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import ButtonOne from '../button/ButtonOne';

const TransferSuccessModal = dynamic(() => import("./TransferSuccessModal"), {
  loading: () => <Loading/>,
});

const NGNToNGN = () => {
  // const [bankOptions, setBankOptions] = useState<string[]>([]);
  const [accountName, setAccountName] = useState<string>('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [amount, setAmount] = useState<number | null>(null);
  const [accountBalance] = useState<number>(2698435);
  const [remark, setRemark] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('');
  const [accountNumberError, setAccountNumberError] = useState<string>('');
  
  const bankOptionsRef = useRef(null);

  useEffect(() => {
      // if (!accountNumber) {
      //   setAccountNumberError('Enter your account number');
      //   return;
      if (accountNumber.length > 0 && accountNumber.length !== 10) {
        setAccountNumberError('Invalid account number. Should be 10 digits');
        setAccountName('');
        return;
      } else if (amount && amount > accountBalance) {
        setAmountError('Insufficient balance');
        return;
      } else {
        setAmountError('');
        setAccountNumberError('');
        // setBankOptions(availableBankOptions)
        // setIsOTPOpen(prev => !prev);
      }

      // if (accountNumber.length === 10 && accountName === '') {
      //   bankOptionsRef.current?.focus();
      // }
  }, [accountNumber, amount, accountBalance, accountName]);

  const handleModalToggle = () => {
    if (isSuccessModalOpen === false) {
      setIsLoading(true);
      // setTimeout(() => {
        setIsSuccessModalOpen(true);
        // }, 1000);
      } else {
        setIsSuccessModalOpen(false);
      }
    setIsLoading(false);
  };
  
  if (isLoading) {
    return <Loading/>;
  };

  return (
    <section className='space-y-5'>
      <div className="w-full">
        <h1 className='text-lg font-semibold'>Local Transfer</h1>
      </div>

      <div className="w-full mt-3">
        <div className='w-full sm:w-96 rounded-radius-12 p-6 mx-auto bg-white border border-customGray space-y-3'>
          <h2 className='font-semibold pb-4'>Recipient Account</h2>
          <form className="w-full space-y-3">
              <div className="w-full space-y-3">
                  <div className="w-full">
                    {/* <InputSelect autoFocus={true} onChange={(e) => setAccountNumber(e.target.value)} valueArray={bankOptions} name="email" /> */}
                    <InputOne required={true} disabled={accountName !== ''} type='number' onChange={(e) => setAccountNumber(e.target.value)} value={''} name="accountNumber" placeholderText='Enter account number' />
                    {(accountNumber.length === 10 && accountName === '') && 
                    <div className='w-full flex items-center justify-between gap-2'>
                      <p className='text-xs'>Select account info</p>
                      <select ref={bankOptionsRef} name='bank' id='bank' onChange={(e) => setAccountName(e.target.value)} className={`bg-transparent py-[10px] pr-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]`}>
                        {availableBankOptions.map((item, index) => (
                          <option key={index} value={item.accountName}>{item.bank}</option>
                        ))}
                      </select>
                    </div>}
                    {accountName && <p className='text-end text-xs font-semibold'>{accountName}</p>}
                    {accountNumberError && <p className='text-center text-xs text-red-700'>{accountNumberError}</p>}
                  </div>
                  <div className="w-full">
                    <InputOne required={true} type='number' onChange={(e) => setAmount(parseInt(e.target.value))} value={''} name="amount" placeholderText='Amount to be sent' />
                    {amountError && <p className='text-center text-xs text-red-700'>{amountError}</p>}
                  </div>
                  
                  <TextAreaTwo floatingLabel='Remark' required={true} onChange={(e) => setRemark(e.target.value)} value={remark} name="remark" placeholderText='Any remarks? (Optional)' classes='w-full placeholder:text-center placeholder:pt-4' />
                  
                  <ButtonOne onClick={handleModalToggle} btnText1='Confirm' classes={`w-full py-2 px-3 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none`} />
              </div>
              
          </form>
        </div>
      </div>

      {isSuccessModalOpen && <TransferSuccessModal handleModalToggle={handleModalToggle} />}
    </section>
  )
}

export default NGNToNGN