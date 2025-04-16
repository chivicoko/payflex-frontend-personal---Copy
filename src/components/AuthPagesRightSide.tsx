import Image from 'next/image';
import React from 'react'

const AuthPagesRightSide = () => {
  return (
    <div className='order-1 md:order-2 w-full md:w-1/2 h-fit py-6 md:h-screen min-h-full bg-[#f3f6fa] flex items-center justify-end'>
        <div className="relative w-[90%] h-[15vh] md:h-[80vh] pl-3 border-[4px] border-r-0 border-neutral-800 rounded-s-xl">
            <Image
                src="/images/profile_banner.jpg"
                alt="Dashboard's Snapshot"
                fill
                priority
                className="object-cover rounded-s-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    </div>
  )
}

export default AuthPagesRightSide;