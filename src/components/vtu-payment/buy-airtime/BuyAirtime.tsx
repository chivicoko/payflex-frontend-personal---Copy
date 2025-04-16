'use client';

import { getAirtimeProviders, buyAirtime } from '@/features/vtu-vas/actions';
import React, { useEffect, useState } from 'react';
import { showToast } from '@/components/HotToast';
import { AirtimeProviderProps, AirtimeProviderResponse, AirtimeTransactionDataProps } from '@/types/base';
import { parseAmountIntoNumberFormat, parseFormattedAmountToNumber } from '@/utils/formatters';
import FormWrapper from './FormWrapper';
import TransactionSummary from './TransactionSummary';
import { useQuery } from '@tanstack/react-query';
import ProviderSelection from './ProviderSelection';
import { useAuthToken } from '@/hooks/useAuthToken';
import StatusHandler from '@/components/shared/StatusHandler';
import { airtimeProviderLogos } from '@/data/base';
import { useUserData } from '@/hooks/useUserData';

const BuyAirtime: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<AirtimeProviderProps | null>(null);
  const [selectedProviderLogo, setSelectedProviderLogo] = useState<string | null>(null);
  const [transactionData, setTransactionData] = useState<AirtimeTransactionDataProps | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = useAuthToken();
  const { refetchDashboard } = useUserData();
  
  const {
    data: providerData,
    isLoading,
    error,
  } = useQuery<AirtimeProviderResponse, Error>({
    queryKey: ['airtimeProviders'],
    queryFn: () => getAirtimeProviders(token ?? ''),
    enabled: !!token,
  });

  // Show toast after successful data load
  useEffect(() => {
    if (providerData?.success) {
      showToast(providerData.message);
    }
  }, [providerData]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = parseAmountIntoNumberFormat(e.target.value);
    setAmount(`₦${formatted}`);
  };

  const handleProviderSelect = async (provider: AirtimeProviderProps) => {
    setSelectedProviderLogo(airtimeProviderLogos[provider.provider.toUpperCase()] || "/images/imagePlaceholder.jpeg");
    setSelectedProvider(provider);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!token || !selectedProvider) return;

      const parsedAmount = parseFormattedAmountToNumber(amount);

      const { success, message, data } = await buyAirtime(token, {
        amount: parsedAmount.toString(),
        phoneNumber,
        provider: selectedProvider.provider,
      });

      if (success) {
        setTransactionData({
          provider: data.provider,
          phoneNumber: data.mobile,
          amount: data.amount,
          date: data.created_at || new Date().toLocaleString(),
          reference: data.reference,
          status: data.status,
        });

        await refetchDashboard();
        showToast(message);
      } else {
        showToast(message || 'Something went wrong', 'error');
      }
    } catch (error) {
      showToast(`Error: ${(error as Error).message}`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Checking loading state and error state
  if (isLoading || !!error) return (
    <StatusHandler
      isLoading={isLoading}
      isError={!!error}
      errorMessage="Failed to load providers. Please try again."
    />
  );

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold mt-5">Buy Airtime</h1>
      {!selectedProvider ? (
        <ProviderSelection
          providers={providerData?.data || []}
          onSelect={handleProviderSelect}
        />
      ) : transactionData ? (
        <TransactionSummary transactionData={transactionData} />
      ) : (
        <FormWrapper
          handleSubmit={handleSubmit}
          onCodeChange={handleAmountChange}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
          amount={amount}
          isSubmitting={isSubmitting}
          setSelectedProvider={setSelectedProvider}
          selectedProviderLogo={selectedProviderLogo}
        />
      )}
    </section>
  );
};

export default BuyAirtime;
