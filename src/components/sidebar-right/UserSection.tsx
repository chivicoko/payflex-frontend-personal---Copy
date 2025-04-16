'use client';

import Image from 'next/image';
import LoadingSpinner from '../LoadingSpinner';
import { useUserData } from '@/hooks/useUserData';

const UserSection = () => {

  const {
    userDashboardData,
    isPending,
    hasError,
    } = useUserData();

    if (hasError) return <div>Error loading user data</div>;

    const { user } = userDashboardData || {};

  return (
    <div>
        <div className="relative mb-16">
            <div className="relative w-full h-[100px]">
                <Image
                    src="/images/profile_banner.jpg"
                    alt="User's profile banner"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="absolute -bottom-1/2 left-4 size-20 rounded-full border-2 border-white shadow-md">
                <Image
                    src="/images/default_avatar.png"
                    alt="User's profile picture"
                    fill
                    priority
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>

        <div className='px-4 mb-6'>
            {isPending ? <LoadingSpinner/> :
            <>
                <h2 className='font-semibold'>{user.name}</h2>
                <p className='text-textGray text-sm'>{user.email}</p>
            </>}
        </div>
    </div>
  )
}

export default UserSection;