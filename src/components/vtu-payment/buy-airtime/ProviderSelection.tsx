'use client';

import React from 'react';
import Image from 'next/image';
import { AirtimeProviderProps } from '@/types/base';

const providerLogos: Record<string, string> = {
  MTN: "/images/mtn-icon.jpg",
  AIRTEL: "/images/airtel-icon.jpg",
  GLO: "/images/glo-icon.jpg",
  "9MOBILE": "/images/9mobile-icon.jpg",
};

type Props = {
  providers: AirtimeProviderProps[];
  onSelect: (provider: AirtimeProviderProps) => void;
};

const ProviderSelection = ({ providers, onSelect }: Props) => {
  return (
    <>
      <h2 className="text-base font-medium mb-4">Select Provider</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {providers && providers?.map((provider) => {
          const logo = providerLogos[provider.provider.toUpperCase()] || '/images/default.png';

          return (
            <div
              key={provider.provider}
              onClick={() => onSelect({ ...provider, providerLogoUrl: provider.providerLogoUrl })}
              className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <span className="relative size-16 mb-2 rounded-lg">
                <Image
                  src={logo}
                  alt={provider.provider}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </span>
              <span className="text-sm font-medium text-gray-700">{provider.provider}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProviderSelection;
