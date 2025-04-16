// hooks/useSessionInit.ts
import { useGeneralData } from '@/context/GeneralDataContext';
import { initUserSession } from '@/utils/initUserSession';

export const useSessionInit = () => {
  const {
    setUser,
    setWallet,
    setTransactionHistory,
    setUserProfile,
    setUserAddress,
    setUserKYC,
    setContextLoading,
  } = useGeneralData();

  const initialize = async (token: string) => {
    setContextLoading(true);
    const data = await initUserSession(token);
    if (data) {
      setUser(data.user);
      setWallet(data.wallet);
      setTransactionHistory(data.transactionHistory);
      setUserProfile(data.profile_data);
      setUserAddress(data.addres);
      setUserKYC(data.user_kyc_data);
    }
    setContextLoading(false);
  };

  return { initialize };
};
