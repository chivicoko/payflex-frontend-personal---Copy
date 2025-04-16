'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { CardStatusDistribution, PIE_COLORS } from '../../../data/base';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const BankAccountsPieChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='pr-2 pl-4 flex flex-col md:flex-row items-start justify-between flex-wrap gap-x-4'>

      <div className="relative flex items-center justify-center gap-4 md:gap-6">
        <div className="size-48 md:size-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={CardStatusDistribution}
                dataKey="cards"
                innerRadius="70%"
                outerRadius="85%"
                cx="50%"
                fill="#8884d8"
              >
                {CardStatusDistribution.map((entry, index) => (
                  <Cell key={`cell-${entry.id || index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} strokeWidth={0} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="-ml-10">
          <p className='mb-2 md:mb-6 text-textGray text-lg md:text-xl'>Bank Accounts: <span className='text-textGrayDarker font-semibold'>2</span></p>
          <p className='text-textGray text-sm md:text-base'>Overall Wallet Balance</p>
          <p className='text-textGrayDarker text-xl md:text-2xl font-semibold'>
            $ <CountUp start={0} end={2698435} duration={2} delay={0} />
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto flex items-center justify-center md:justify-end">
        <ButtonNeutral btnText2='+' btnText1='Add bank' classes='text-blue-700 hover:text-blue-800 hover:underline font-semibold text-sm space-x-2 md:my-0 mx-auto md:mx-0' btnText2Classes='text-xl' />
      </div>
    </div>
  );
};

export default BankAccountsPieChart;
