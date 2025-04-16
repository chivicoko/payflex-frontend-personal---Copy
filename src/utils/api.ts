import axios, { AxiosRequestConfig } from 'axios';

export const sendApiRequest = async <T>(
  method: 'post' | 'get' | 'put',
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message || 'Something went wrong';
      throw new Error(message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
