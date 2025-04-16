import { showToast } from '@/components/HotToast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getAirtimeProviders } from '@/features/vtu-vas/actions';
import { AirtimeProviderProps } from '@/types/base';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<AirtimeProviderProps | null>(null);
  
    const router = useRouter();

    const providerLogos: Record<string, string> = {
        MTN: "/images/mtn-icon.jpg",
        AIRTEL: "/images/airtel-icon.jpg",
        GLO: "/images/glo-icon.jpg",
        "9MOBILE": "/images/9mobile-icon.jpg",
    };
    
    console.log(selectedProvider);

    useEffect(() => {
        const token = sessionStorage.getItem("accessToken");
        if (!token) return router.push('/login');

        const fetchProviders = async () => {
            try {
            const res = await getAirtimeProviders(token);
            if (!res.success) {
                showToast('No data was gotten', 'error');
            } else {
                setProviders(res.data);
            }
            } catch (error) {
            showToast(`Error: ${(error as Error).message}`, 'error');
            router.push('/');
            } finally {
            setLoading(false);
            }
        };

        fetchProviders();
    }, [router]);
    
  return (
    <>
        <h2 className="text-base font-medium mb-4">Select Provider</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {loading ?  
            <div className="w-full h-[12rem] flex items-center justify-center">
                <LoadingSpinner dynamicSize='size-12' />
            </div>
            : 
            providers.map((provider: AirtimeProviderProps) => (
                <div
                    key={provider.provider}
                    onClick={() => setSelectedProvider(provider)}
                    className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md cursor-pointer transition"
                >
                    <span className="relative size-16 mb-2">
                        <Image
                        src={providerLogos[provider.provider.toUpperCase()] || "/images/default.png"}
                        alt={provider.provider}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </span>
                    <span className="text-sm font-medium text-gray-700">{provider.provider}</span>
                </div>
            ))}
        </div>
    </>
  )
}

export default Providers