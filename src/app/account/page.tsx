'use client';

import AccountHeader from '@/components/account/AccountHeader';
import Profile from '@/components/account/Profile';
import Verification from '@/components/account/Verification';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import { accountAndVirtualCardsTabs } from '@/data/base';
import React, { useState } from 'react'

const Account = () => {
    const [activeTab, setActiveTab] = useState('Profile')

  return (
    <div className='w-full h-fit min-h-screen flex items-start justify-center pt-2 pb-5 px-2'>
        <div className='w-full'>
            <AccountHeader/>
            <div className='p-1 rounded-radius-12 border'>
                <ul className='flex items-center justify-center gap-2 border-b bg-neutral-100 p-2 rounded-[10px]'>
                    {accountAndVirtualCardsTabs.slice(0,2).map(tab => 
                    <li key={tab.id}>
                        <ButtonNeutral
                            onClick={() => setActiveTab(tab.text)}
                            btnText1={tab.text}
                            icon1={<tab.icon style={{fontSize: '19px'}} />}
                            classes={`${activeTab === tab.text ? 'bg-white text-primary' : 'bg-transparent text-neutral-800'} rounded-radius-8 text-base font-semibold py-2 px-5 flex items-center gap-1`}
                        />
                    </li>
                    )}
                </ul>

                {activeTab === 'Profile' && <Profile/>}
                {activeTab === 'Verification' && <Verification/>}
            </div>
        </div>
    </div>
  )
}

export default Account;