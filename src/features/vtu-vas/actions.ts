'use server';

import { sendApiRequest } from '@/utils/api';

const VTU_URL = 'api/v1/vtu/gb';

export const getAirtimeProviders = async (token: string) => {
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
        'get',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/airtime-providers`,
        null,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
    );
};

export const buyAirtime = async (token: string, payload: {
    amount: string,
    phoneNumber: string,
    provider: string
  }) => {
    if (!token) {
        throw new Error("No access token found.");
    }
    // console.log(`URL: ${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/airtime/topup`)

    return await sendApiRequest(
      'post',
      `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/airtime/topup`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      }
    );
  };


export const getInternetDataProviders = async (token: string) => {
  if (!token) {
    throw new Error("No access token found.");
  }

  return await sendApiRequest(
    'get',
    `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/internet-data-types`,
    null,
    { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
  );
};

export const selectInternetData = async (token: string, params: string) => {
  console.log(params);
  if (!token) {
    throw new Error("No access token found.");
  }
  // console.log(`URL: ${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/available-data-plans/${params}`)

  return await sendApiRequest(
    'get',
    `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/available-data-plans/${params}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
  );
};


export const buyInternetData = async (token: string, payload: {
    provider: number,
    number: string,
    plan_id: number,
    amount: number,
  }) => {
    if (!token) {
      throw new Error("No access token found.");
    }
    // console.log(`URL: ${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/internet/purchase-data`)

  return await sendApiRequest(
    'post',
    `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${VTU_URL}/internet/purchase-data`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
  );
};

