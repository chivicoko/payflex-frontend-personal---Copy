'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { availableTransactions, transactionsOptions } from '../../../data/base';
import React, { useState, useEffect } from 'react';

const TransactionOptions = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='flex md:hidden flex-col md:flex-row items-start justify-between flex-wrap gap-2 md:gap-4'>
      <div className='w-full rounded-radius-12 space-y-2 py-2 px-3 bg-white border border-customGray'>
        {transactionsOptions.map(option => 
          <div key={option.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className='size-7 bg-blue-50 flex items-center justify-center rounded-full text-blue-700'>
                <option.textIcon style={{fontSize: '18px'}} />
              </span>
              <span>{option.title}</span>
            </div>
            <ButtonNeutral btnText1={option.btnText} icon2={<option.btnIcon style={{fontSize: '17px'}} />} classes='text-sm flex items-center gap-2 border border-blue-600 bg-transparent text-blue-700 hover:border-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 eas-in-out rounded-radius-4 pr-1 py-[2px]' />
          </div>
        )}
      </div>

      <div className='w-full rounded-radius-12 grid grid-cols-3 sm:grid-cols-4 gap-6 py-3 px-2 bg-white border border-customGray'>
        {availableTransactions.map(transaction =>
          <button key={transaction.id} className='flex flex-col items-center justify-center gap-2 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 outline-none rounded-radius-8'>
            <span className='size-10 bg-blue-50 flex items-center justify-center rounded-radius-8 text-blue-700'>
              <transaction.icon style={{fontSize: '20px'}} />
            </span>
            <span className='text-xs sm:text-base font-semibold text-center'>{transaction.title}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionOptions;
