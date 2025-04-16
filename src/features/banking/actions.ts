'use server';

import { sendApiRequest } from '@/utils/api';

const VTU_URL = 'api/v1/banking';

export const initialisePaystackFunding = async (token: string, payload: {amount: number,
    callback_url: string
  }) => {
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
      'post',
      `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/initialise-paystack-funding`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      }
    );
  };

export const verifyPaystackFunding = async (token: string, payload: {
    reference: string
  }) => {
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
      'post',
      `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/verify-paystack-funding`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      }
    );
  };

