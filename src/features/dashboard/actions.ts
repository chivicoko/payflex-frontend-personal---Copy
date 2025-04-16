'use server';

import { sendApiRequest } from '../../utils/api';

const USER_DASHBOARD_URL = 'api/v1/user';

export const getUserDashboard = async (token: string) => {
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
        'get',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${USER_DASHBOARD_URL}/fetch-user-dashboard`,
        null,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
        // 0
    );
};

export const getUserProfile = async (token: string) => {    
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
        'get',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${USER_DASHBOARD_URL}/fetch-user-profile`,
        null,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
        // 0
    );
};

export const updateProfile = async (token: string, payload: {
    first_name?: string,
    last_name?: string,
    home_address?: string,
    city?: string,
    state?: string,
    country?: string,
    postal_code?: string,
    house_number?: string,
  }) => {
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
      'put',
      `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${USER_DASHBOARD_URL}/update-profile`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      }
    );
};

export const updateKYC = async (token: string, payload: {
    id_type?: string,
    id_no?: string,
  }) => {
    if (!token) {
      throw new Error("No access token found.");
    }

  return await sendApiRequest(
    'put',
    `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${USER_DASHBOARD_URL}/update-kyc`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
  );
};

