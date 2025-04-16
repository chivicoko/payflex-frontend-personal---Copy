'use client';

import { quickActions, walletBalanceInfo } from '@/data/base'
import React, { useEffect, useState } from 'react'
import QuickAction from './dashboard/dataDisplay/QuickAction'
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material'
import CountUp from 'react-countup'
import { verifyPaystackFunding } from '@/features/banking/actions'
import { showToast } from './HotToast'
import LoadingSpinner from './LoadingSpinner';
import { useAuthToken } from '@/hooks/useAuthToken';
import { useQuery } from '@tanstack/react-query';
import { useUserData } from '@/hooks/useUserData';
import { useGeneralData } from '@/stores/useGeneralData';

const DashboardHeader = () => {
  const [openBalances, setOpenBalances] = useState<Set<number>>(new Set());
  // const [isPaystackVerified, setIsPaystackVerified] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  
  const currentData = useGeneralData((state) => state.currentData);
  const setCurrentData = useGeneralData((state) => state.setCurrentData);

  const token = useAuthToken();
  // console.log(isPaystackVerified);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const ref = urlParams.get("reference");
      setReference(ref);
    }
  }, []);
  
  const {
    userDashboardData,
    isPending,
    hasError,
  } = useUserData();

  const { wallet } = userDashboardData || {};

  const {
    data: referenceData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['paystackVerificationProviders'],
    queryFn: () => verifyPaystackFunding(token ?? '', { reference: reference! }),
    enabled: !!token && !!reference,
  });

  useEffect(() => {
    if (reference && !token) {
      showToast("User not authenticated!", "error");
    }
  
    if (!reference) return;
  
    if (referenceData?.success) {
      showToast(referenceData.message);
      setCurrentData({ ...currentData, currentTab: '/' });
      // setIsPaystackVerified(true);
      // console.log(referenceData);
    }
  }, [reference, token, referenceData, currentData, setCurrentData]);
  
  if (hasError) return <div>Error loading user data</div>;

  const handleBalanceToggle = (id: number) => {
    setOpenBalances(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };
  
  if (error) showToast("Failed to load providers. Please try again.", 'error');

  // Checking loading state and error state
  // if (isLoading || !!error) return (
  //   <StatusHandler
  //     isLoading={isLoading}
  //     isError={!!error}
  //     errorMessage="Failed to load providers. Please try again."
  //   />
  // );

  return (
    <div>
      <div className="flex items-center gap-2 md:gap-4 xl:gap-6 flex-wrap">
        {walletBalanceInfo.map(item =>
          <div key={item.id} className='w-72 flex-1 sm:flex-none h-40 py-6 pl-5 pr-3 bg-blue-200 rounded-3xl flex flex-col justify-between'>
            <p className="text-neutral-800 text-lg font-semibold">Wallet Balance</p>
            {/* <div className="w-full flex items-center justify-end gap-1">
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
            </div> */}

            <div className="space-y-3">
              <div className="w-full flex items-center justify-between">
                <p className='text-textGrayDarker text-2xl md:text-3xl font-bold space-x-1'>
                  <span className={`${item.currency === '₦' ? 'text-green-600' : item.currency === '£' ? 'text-red-600' : 'text-blue-800'} font-extrabold`}>
                    {item.currency}
                  </span>
                  {(isPending || isLoading) ? <LoadingSpinner /> : (wallet && !openBalances.has(item.id)) ?
                    <CountUp start={0} end={item.currency === '₦' ? wallet.current_balance || 0.00 : 0.00} duration={2} delay={0} decimals={2} /> :
                    "******"}
                </p>
                <button onClick={() => handleBalanceToggle(item.id)} className='hover:bg-blue-300 rounded-full size-8 flex items-center justify-center border hover:border-transparent transition-all duration-300 ease-in-out'>
                  {!openBalances.has(item.id) ?
                  <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> :
                  <Key style={{fontSize: '19px', }} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2 md:space-y-5 py-2 mt-6">
        <div className="flex items-center justify-between">
          <h2 className='text-base font-semibold'>Quick Actions</h2>
        </div>

        <div className="w-full flex items-center gap-8 flex-wrap">
          {quickActions.map(item =>
            <QuickAction key={item.id} item={item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader