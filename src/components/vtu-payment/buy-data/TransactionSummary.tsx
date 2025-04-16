import { useGeneralData } from '@/stores/useGeneralData';
import { InternetDataTransactionDataProps } from '@/types/base';
import { useRouter } from 'next/navigation';
import React from 'react'

interface TransactionData {
    transactionData: InternetDataTransactionDataProps
}

const TransactionSummary = ({transactionData}: TransactionData) => {
    const updateGeneralData = useGeneralData((state) => state.updateGeneralData);
    const router = useRouter();

  const handleGoBackHome = () => {
    updateGeneralData('/dashboard', '');
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-5">
        <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>
        <div className="bg-white p-6 border rounded-lg shadow-md space-y-4 w-96">
            <div className="flex justify-between text-sm">
                <span className="font-medium">Provider:</span>
                <span>{transactionData?.transactionProvider}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="font-medium">Recipient:</span>
                <span>{transactionData?.phoneNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="font-medium">Amount:</span>
                <span>{transactionData?.amount || 0}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="font-medium">Date:</span>
                <span>{transactionData.date}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className=" font-medium">Reference:</span>
                <span className='text-xs'>{transactionData.reference}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="font-medium">Status:</span>
                <span className={transactionData.status === 'Successful' ? 'text-green-500' : 'text-red-500'}>
                    {transactionData.status}
                </span>
            </div>
        </div>
        <button onClick={handleGoBackHome} className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg">Go Back Home</button>
    </div>
  )
}

export default TransactionSummary;