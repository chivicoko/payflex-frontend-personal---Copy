import { budgets } from '@/data/base'
import React from 'react'
import ButtonNeutral from '../button/ButtonNeutral'
import Image from 'next/image'

const UserBudgets = () => {
  return (
    <div className='px-4'>
        <div className="flex items-center justify-between">
            <h2 className=''>My Budgets</h2>
            <ButtonNeutral btnText2='...' btnText1='' classes='text-sm space-x-2' btnText2Classes='text-lg' />
        </div>

        {budgets.slice(0,2).map(budget => 
            <div key={budget.id} className={`flex items-center justify-between gap-3 ${budget.overallColor === 'green' ? 'bg-green-50' : budget.overallColor === 'blue' ? 'bg-blue-50' : 'bg-red-50'} w-full my-4 p-3 rounded-radius-8`}>
                <div className={`rounded-full p-2 ${budget.overallColor === 'green' ? 'bg-green-300' : budget.overallColor === 'blue' ? 'bg-blue-300' : 'bg-red-300'} `}>
                    <div className={`relative size-4 rounded-full bg-${budget.overallColor}-300`}>
                        <Image
                            src={`/icons/${budget.icon}`}
                            alt="Lapo's Logo"
                            fill
                            priority
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                <div className="w-[85%]">
                    <p className='flex items-center justify-between gap-x-3 flex-wrap pb-2'>
                        <span className={`${budget.overallColor === 'green' ? 'text-green-800' : budget.overallColor === 'blue' ? 'text-blue-800' : 'text-red-800'} text-sm`}>{budget.text1}</span>
                        <span className={`${budget.overallColor === 'green' ? 'text-green-700' : budget.overallColor === 'blue' ? 'text-blue-700' : 'text-red-700'} text-sm`}>{budget.text2}</span>
                    </p>
                    <span className={`${budget.overallColor === 'green' ? 'bg-green-200' : budget.overallColor === 'blue' ? 'bg-blue-200' : 'bg-red-200'} rounded-full flex items-center justify-start`}>
                        <span className={`${budget.overallColor === 'green' ? 'bg-green-700' : budget.overallColor === 'blue' ? 'bg-blue-700' : 'bg-red-700'} px-2 py-1 w-[30%] rounded-full flex items-center justify-center`}></span>
                    </span>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserBudgets