import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Protected() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return <div>Protected content</div>;
}