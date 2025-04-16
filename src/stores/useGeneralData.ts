import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  INITIAL_GENERAL_DATA,
  currentUserInfo
} from '../data/base';

import {
  GeneralDataProps,
  TransactionHistoryProps,
  UserAddressProps,
  UserDataProps,
  UserKYCProps,
  UserProfileProps,
  UserProps,
  WalletProps
} from '../types/base';

interface GeneralDataState {
  currentData: GeneralDataProps;
  currentUserData: UserDataProps;
  loggedInUser: { email: string; name: string };
  accessToken: string;
  contextLoading: boolean;

  user: UserProps | null;
  userProfile: UserProfileProps | null;
  userAddress: UserAddressProps | null;
  userKYC: UserKYCProps | null;
  wallet: WalletProps | null;
  transactionHistory: TransactionHistoryProps[] | null;

  // Actions
  setCurrentData: (data: GeneralDataProps) => void;
  setCurrentUserData: (data: UserDataProps) => void;
  setLoggedInUser: (user: { email: string; name: string }) => void;
  setAccessToken: (token: string) => void;
  updateGeneralData: (tab: string, subTab: string) => void;
  dropLoggedInUserInfo: () => void;
  setContextLoading: (loading: boolean) => void;

  setUser: (user: UserProps | null) => void;
  setUserProfile: (profile: UserProfileProps | null) => void;
  setUserAddress: (address: UserAddressProps | null) => void;
  setUserKYC: (kyc: UserKYCProps | null) => void;
  setWallet: (wallet: WalletProps | null) => void;
  setTransactionHistory: (txs: TransactionHistoryProps[] | null) => void;
}

export const useGeneralData = create<GeneralDataState>()(
  persist(
    (set) => ({
      currentData: INITIAL_GENERAL_DATA,
      currentUserData: currentUserInfo,
      loggedInUser: { email: '', name: '' },
      accessToken: '',
      contextLoading: false,

      user: null,
      userProfile: null,
      userAddress: null,
      userKYC: null,
      wallet: null,
      transactionHistory: null,

      setCurrentData: (data) => set({ currentData: data }),
      setCurrentUserData: (data) => set({ currentUserData: data }),
      setLoggedInUser: (user) => set({ loggedInUser: user }),
      setAccessToken: (token) => set({ accessToken: token }),
      setContextLoading: (loading) => set({ contextLoading: loading }),

      updateGeneralData: (tab, subTab) =>
        set(() => {
          const updated = { currentTab: tab, currentSubtab: subTab };
          localStorage.setItem('currentData', JSON.stringify(updated));
          return { currentData: updated };
        }),

      dropLoggedInUserInfo: () => {
        localStorage.removeItem('currentData');
        localStorage.removeItem('loggedInUserInfo');
        set({
          loggedInUser: { email: '', name: '' },
          currentData: INITIAL_GENERAL_DATA,
        });
      },

      setUser: (user) => set({ user }),
      setUserProfile: (profile) => set({ userProfile: profile }),
      setUserAddress: (address) => set({ userAddress: address }),
      setUserKYC: (kyc) => set({ userKYC: kyc }),
      setWallet: (wallet) => set({ wallet }),
      setTransactionHistory: (txs) => set({ transactionHistory: txs }),
    }),
    {
      name: 'general-data-store', // localStorage key
      partialize: (state) => ({
        currentData: state.currentData,
        currentUserData: state.currentUserData,
        loggedInUser: state.loggedInUser,
        accessToken: state.accessToken,
      }),
    }
  )
);
