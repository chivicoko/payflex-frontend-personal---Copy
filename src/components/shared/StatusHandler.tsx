import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { useUserData } from '@/hooks/useUserData';

interface StatusHandlerProps {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  height?: string;
  size?: string;
}

const StatusHandler: React.FC<StatusHandlerProps> = ({
  isLoading,
  isError,
  errorMessage = 'Failed to load data. Please try again.',
  height = 'h-[12rem]',
  size = "size-12",
}) => {
  
    const {
      isPending,
      hasError,
    } = useUserData();

  if (isLoading || isPending) {
    return (
      <div className={`w-full ${height} flex items-center justify-center`}>
        <LoadingSpinner dynamicSize={size} />
      </div>
    );
  }

  if (isError || hasError) {
    return (
      <div className={`w-full ${height} flex items-center justify-center`}>
        <p className="text-red-500">{errorMessage}</p>
      </div>
    );
  }

  return null;
};

export default StatusHandler;
