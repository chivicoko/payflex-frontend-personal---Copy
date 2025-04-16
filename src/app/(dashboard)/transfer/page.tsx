'use client';

import NGNToForeign from '@/components/transfer/NGNToForeign';
import NGNToNGN from '@/components/transfer/NGNToNGN';
import { useGeneralData } from '@/stores/useGeneralData';
import React from 'react'

const Transfer = () => {
    const currentData = useGeneralData((state) => state.currentData);

  return (
    <>
    {currentData.currentSubtab === '/ngn-ngn-transfer' && <NGNToNGN/>}
    {currentData.currentSubtab === '/ngn-foreign-transfer' && <NGNToForeign/>}
    </>
  )
}

export default Transfer;