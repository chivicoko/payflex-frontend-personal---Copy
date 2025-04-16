'use client';

import CountUp from 'react-countup';
import { WalletBalanceInfoProps } from '@/types/base';
import Image from 'next/image';
import { useState } from 'react';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';


const WalletBallanceCard: React.FC<WalletBalanceInfoProps> = ({item}) => {
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);

  const handleBalanceToggle = () => setIsBalanceOpen(prev => !prev);
    
  return (
    <div className='w-72 flex-1 h-40 py-6 pl-5 pr-3 bg-blue-200 rounded-3xl flex flex-col justify-between'>
      <div className="w-full flex items-center justify-end gap-1">
        <p className='font-semibold text-xl'>{item.currencyInitials}</p>
        <div className="relative size-8 rounded-full">
          <Image
            src={`/images/${item.currencyFlag}`}
            alt="Currency's country logo"
            fill
            priority
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-neutral-700 text-base font-semibold">Wallet Balance</p>
        <div className="w-full flex items-center justify-between">
          <p className='text-textGrayDarker text-xl md:text-2xl font-bold space-x-1'>
            <span className={`${item.currency === '₦' ? 'text-green-600' : item.currency === '£' ? 'text-red-600' : 'text-blue-800'} font-extrabold`}>{item.currency}</span>
            {!isBalanceOpen ? <CountUp start={0} end={0} duration={2} delay={0} decimals={2} /> : "******"}
          </p>
          <button onClick={handleBalanceToggle} className='hover:bg-blue-300 rounded-full size-8 flex items-center justify-center border hover:border-transparent transition-all duration-300 ease-in-out'>
            {isBalanceOpen ?
            <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> :
            <Key style={{fontSize: '19px', }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletBallanceCard;
