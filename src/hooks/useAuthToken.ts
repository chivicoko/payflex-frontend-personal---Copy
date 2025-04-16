import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("accessToken");
    if (!storedToken) {
      router.push('/');
    } else {
      setToken(storedToken);
    }
  }, [router]);

  return token;
};
