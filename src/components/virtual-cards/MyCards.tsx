'use client';

import { virtualCards } from '@/data/base'
import { VirtualCardProps } from '@/types/base';
import React, { useState } from 'react'
import VirtualCardDetails from './VirtualCardDetails';
import VirtualCard from './VirtualCard';

const MyCards = () => {
  const [singleCard, setSingleCard] = useState<VirtualCardProps | null>(null);

  const getSingleCard = (card: VirtualCardProps, id: number) => {
    if (card.id === id) {
      setSingleCard(card);
    }
  };

  const goBackToAllCards = () => setSingleCard(null);

  return (
    <div className='py-6 px-2'>
      <div className='pb-5'>
        <h2 className='text-xl font-semibold'>My Cards</h2>
        <p>Manage your virtual cards for international transactions</p>
      </div>
      
      <div className="w-full">
        {singleCard === null ? 
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2'>
            {virtualCards.map(card =>
            <VirtualCard key={card.id} card={card} getSingleCard={getSingleCard} />
          )}
          </div>
          : <VirtualCardDetails singleCard={singleCard} goBackToAllCards={goBackToAllCards} />}
      </div>
    </div>
  )
}

export default MyCards