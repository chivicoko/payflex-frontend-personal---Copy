'use client';

import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 p-24">
        <h2 className='text-center'><span className='text-red-700 text-9xl'>404</span> <br /> Page not found</h2>
        <p className="text-center">Check the url properly and try again.</p>
        <button onClick={() => router.back()} className="text-primary hover:text-blue-600 underline">Go back</button>
    </div>
  )
}

export default NotFound;