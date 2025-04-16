'use client';

import { getInternetDataProviders, buyInternetData, selectInternetData } from '@/features/vtu-vas/actions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { showToast } from '@/components/HotToast';
import { parsePriceIntoIntegerAndDecimal } from '@/utils/formatters';
import { InternetDataPlanProps, InternetDataProviderProps, InternetDataTransactionDataProps, ProviderResponse } from '@/types/base';
import TransactionSummary from './TransactionSummary';
import FormWrapper from './FormWrapper';
import DataPlans from './DataPlans';
import { useQuery } from '@tanstack/react-query';
import { useAuthToken } from '@/hooks/useAuthToken';
import ProviderSelection from './ProviderSelection';
import { providerLogos, providerParams } from '@/data/base';
import StatusHandler from '@/components/shared/StatusHandler';
import { useUserData } from '@/hooks/useUserData';

const BuyData = () => {
  const [plans, setPlans] = useState<InternetDataPlanProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<InternetDataProviderProps | null>(null);
  const [selectedProviderLogo, setSelectedProviderLogo] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<InternetDataPlanProps | null>(null);
  const [selectedPlanAmount, setSelectedPlanAmount] = useState<{ integerPart: number; decimalPart: number } | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionData, setTransactionData] = useState<InternetDataTransactionDataProps | null>(null);

  const router = useRouter();
  const token = useAuthToken();
  const { refetchDashboard } = useUserData();

  const {
    data: providerData,
    isLoading,
    error,
  } = useQuery<ProviderResponse | undefined, Error>({
    queryKey: ['internetDataProviders'],
    queryFn: () => getInternetDataProviders(token ?? ''),
    enabled: !!token,
  });

  useEffect(() => {
    if (providerData?.success) {
      showToast(providerData.message);
      setLoading(false);
    }
  }, [providerData]);


  useEffect(() => {
    if (selectedPlan) {
      const updatedSelectedPlanAmount = parsePriceIntoIntegerAndDecimal(selectedPlan.amount);
      setSelectedPlanAmount(updatedSelectedPlanAmount);
    }
  }, [selectedPlan]);
  
  const handleProviderSelection = async (provider: InternetDataProviderProps) => {
    setSelectedProviderLogo(providerLogos[provider.name]);
    setIsSubmitting(true);
    setSelectedProvider(provider);

    try {
      setLoading(true)
      if (!token) return showToast("Unauthorized transaction!", 'error');

      const res = await selectInternetData(token, providerParams[provider.name]);
      if (res.success) {
        showToast(res.message);
        setPlans(res.data);
        // setProviders([]);
      } else {
        showToast(`${res.message}` || 'Something went wrong', 'error');
      }
    } catch (error) {
      showToast(`Error: ${(error as Error).message}`, 'error');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      setLoading(true)
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        showToast("Unauthorized transaction!", 'error');
        router.push('/login');
      };

      if (token && selectedProvider && selectedPlan) {
        const {success, message, data} = await buyInternetData(token, {
          provider: selectedProvider.ip_id,
          number: phoneNumber,
          plan_id: selectedPlan.id,
          amount: parseInt(selectedPlan.amount)
        });
    
        if (success) {
          setTransactionData({
            transactionProvider: selectedProvider.name,
            phoneNumber: data.number,
            amount: data.amount,
            date: data.created_at || new Date().toLocaleString(),
            reference: data.reference || '',
            status: success ? 'Successful' : 'Unsuccessful',
          });
          
          // setTimeout(() => {
            //   window.location.reload();
            // }, 1500);
            await refetchDashboard();
            showToast(message);
          } else {
          if (message === 'Transaction failed: Undefined variable: res') {
            showToast('This data plan is not available at the moment!', 'error');
          } else {
            showToast(`${message}` || 'Something went wrong', 'error');
          }
        }
      }
    } catch (error) {
      showToast(`Error: ${(error as Error).message}`, 'error');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  // Checking loading state and error state
  if (isLoading || loading || !!error) return (
    <StatusHandler
      isLoading={isLoading || loading}
      isError={!!error}
      errorMessage="Failed to load providers. Please try again."
    />
  );

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold mt-5">Buy Internet Data</h1>
      {!selectedProvider ? 
        <ProviderSelection
          providers={providerData?.data.data || []}
          onSelect={handleProviderSelection}
        />
        : (plans && plans.length > 0 && selectedPlan === null) ?
          <DataPlans
            setSelectedPlan={setSelectedPlan}
            plans={plans}
            selectedProviderLogo={selectedProviderLogo}
            setSelectedProvider={setSelectedProvider}
          />
        : transactionData ?
          <TransactionSummary transactionData={transactionData} />
        : selectedPlan !== null ?
          <FormWrapper
            handleSubmit={handleSubmit}
            setSelectedPlan={setSelectedPlan}
            selectedPlan={selectedPlan}
            loading={loading}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            selectedPlanAmount={selectedPlanAmount}
            isSubmitting={isSubmitting}
            selectedProviderLogo={selectedProviderLogo}
          /> : null}
    </section>
  );
};

export default BuyData;
