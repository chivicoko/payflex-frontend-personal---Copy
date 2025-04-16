import React from 'react'

const TransactionHistory = () => {
  return (
    <section className='space-y-5'>
      <div className="w-full">
        <h1 className='text-lg font-semibold'>Transaction History</h1>
      </div>

      <div className="w-full h-60 flex items-center justify-center gap-3 mt-3">
        <div className='w-fit p-6 space-y-6'>
          <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold text-textGray text-center'>Coming Soon</h2>
          <p className='text-2xl lg:text-3xl text-center text-textGrayDarker'>Your transactions will soon be ready. Getting ready.</p>
        </div>
      </div>

    </section>
  )
}

export default TransactionHistory