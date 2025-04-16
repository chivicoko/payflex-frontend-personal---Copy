'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral'
import CreateCard from '@/components/virtual-cards/CreateCard';
import MyCards from '@/components/virtual-cards/MyCards';
import { accountAndVirtualCardsTabs } from '@/data/base'
import React, { useState } from 'react'

const VirtualCards = () => {
  const [activeTab, setActiveTab] = useState('Create Card')

  return (
    <div className='w-full h-full flex items-start justify-center py-2'>
      <div className='w-full p-1 rounded-radius-12 border'>
        <ul className='flex items-center justify-center gap-2 border-b bg-neutral-100 p-2 rounded-[10px]'>
          {accountAndVirtualCardsTabs.slice(2,4).map(tab => 
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

        {activeTab === 'Create Card' && <CreateCard />}
        {activeTab === 'My Cards' && <MyCards/>}
      </div>
    </div>
  )
}

export default VirtualCards