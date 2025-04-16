'use client';

import React from 'react';
import Image from 'next/image';
import { InternetDataProviderProps } from '@/types/base';
import { providerLogos } from '@/data/base';

type Props = {
  providers: InternetDataProviderProps[];
  onSelect: (provider: InternetDataProviderProps) => void;
};

const ProviderSelection = ({ providers, onSelect }: Props) => {
  return (
    <>
      <h2 className="text-base font-medium mb-4">Select Provider</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {providers && providers.map((provider) => {
          const logo = providerLogos[provider.name] || "/images/imagePlaceholder.jpeg";

          return (
            <div
              key={provider.name}
              onClick={() => onSelect(provider)}
              className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <span className="relative size-16 mb-2 rounded-lg">
                <Image
                  src={logo}
                  alt={provider.name}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </span>
              <span className="text-sm font-medium text-gray-700">{provider.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProviderSelection;
