'use client';

import { availableLendersTableHead, availableLenders } from '../../data/base';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import FullPagination from '../pagination/FullPagination';
import { MoreVertOutlined } from '@mui/icons-material';
import ButtonNeutral from '../button/ButtonNeutral';
import RowDropdown from './RowDropdown';

const History = ({handleDropDownTabClick}: {handleDropDownTabClick: (tab: string) => void}) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  // ============== pagination =================
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionPerPage, setTransactionPerPage] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => { 
      if (window.innerWidth <= 640) {
        setTransactionPerPage(4);
      } else {
        if (window.innerHeight <= 731) {
          setTransactionPerPage(4);
        } else if (window.innerHeight <= 810) {
          setTransactionPerPage(5);
        } else if (window.innerHeight <= 1180) {
          setTransactionPerPage(8)
        // } else if (window.innerHeight <= 1085) {
        //   setTransactionPerPage(8)
        // } else if (window.innerHeight <= 1180) {
        //   setTransactionPerPage(10)
        } else {
          setTransactionPerPage(15);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [transactionPerPage]);


  const indexOfLastProduct = currentPage * transactionPerPage;
  const indexOfFirstProduct = indexOfLastProduct - transactionPerPage;
  const currentAvailableLenders = availableLenders.slice(1, availableLenders.length).slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(availableLenders.length / transactionPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTransactionPerPage(Number(event.target.value));
  //   setCurrentPage(1);
  // };
  // ============== pagination =================
  
  const handleMenuToggle = (id: number) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={`transition-all duration-300 ease-in-out`}>
      <div className="flex flex-col items-center justify-between gap-1">
        {availableLenders && availableLenders.length > 0 ?
        <>
        <div className="w-full overflow-x-scroll custom-scrollbar">
          <table className="min-w-full custom-scrollbar">
            <thead className="bg-transparent border-b border-customGray">
              <tr className="bg-neutral-100">
                {availableLendersTableHead.map(item => (
                  <th key={item.id} className={`py-[10px] text-[13px] whitespace-nowrap px-2 text-center text-textGray capitalize tracking-wider`}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {currentAvailableLenders.map((item, index) => (
                <tr
                  key={item.id}
                  className={`my-2 ${parseInt(item.rating) < 50 ? 'bg-orange-50' : 'bg-green-50'}`}
                >
                  
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    {index + 1}.
                  </td>
                  <td className={`relative 'py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    <span className='flex items-center justify-center gap-2'>
                      <div className="relative size-7 rounded-full border">
                        <Image
                            src={`/images/${item.avatar}`}
                            alt="cardinfra logo"
                            fill
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </span>
                  </td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    {item.fullName}
                  </td>
                  <td className={`relative ${parseInt(item.amount) < 10000  ? 'text-orange-700' : 'text-green-700'} py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    {parseInt(item.amount) < 10000  ? '-' : '+'} ${item.amount}
                  </td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    {item.rating}
                  </td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    <ButtonNeutral onClick={() => handleMenuToggle(item.id)} icon1={<MoreVertOutlined />} />
                    {openMenuId === item.id && <RowDropdown handleDropDownTabClick={handleDropDownTabClick} isOpen={openMenuId === item.id} onClose={() => setOpenMenuId(null)} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <FullPagination
          // transactionPerPage={transactionPerPage}
          // handleRowsPerPageChange={handleRowsPerPageChange}
          // totalTransactions={availableLenders.length}
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
         />
        </>
        : 
        <div className='text-center text-xl text-gray-600'>No users found</div>}
      </div>
    </div>
  )
}

export default History