'use client';

import { useRouter } from 'next/navigation';

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen min-h-full flex-col items-center justify-center gap-4 p-6">
        <h2 className='text-center'><span className='text-red-700 text-5xl md:text-9xl'>Forbidden</span> </h2>
        <p className="text-center text-xl md:text-3xl">You are unauthorized to access that page.</p>
        <button onClick={() => router.back()} className="text-primary hover:text-blue-600 underline">Go back</button>
    </div>
  )
}

export default Unauthorized;