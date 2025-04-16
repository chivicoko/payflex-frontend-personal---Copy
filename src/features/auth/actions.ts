'use server';

import { sendApiRequest } from '../../utils/api';
import { UserDataProps } from '@/types/base';

const AUTH_URL = 'api/v1/auth';

export const requestEmailOTP = async (emailAddress: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/request-email-otp`,
        {
            "email": emailAddress
        }
    );
};

export const verifyEmail = async (email: string, code: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/verify-email-otp`,
        {
            "email": email,
            "otp": code
        }
    );
};

export const registerUser = async (userData: UserDataProps) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/signup`,
        userData
    );
};

export const loginUser = async (emailAddress: string, password: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/signin`,
        {
            "email": emailAddress,
            "password": password
        }
    );
};

export const resetPassword = async (emailAddress: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/request-password-reset-email`,
        {
            "email": emailAddress,
        }
    );
};

export const verifyPasswordReset = async (emailAddress: string, code: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/verify-password-reset-email`,
        {
            "email": emailAddress,
            "otp": code
        }
    );
};

export const updatePassword = async (emailAddress: string, new_password: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/reset-password`,
        {
            "email": emailAddress,
            "new_password": new_password
        }
    );
};
