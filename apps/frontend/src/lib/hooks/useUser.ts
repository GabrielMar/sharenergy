import { useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import api from '../services/api';

import create from 'zustand';

type UserState = {
  token: string;
  update: (by: string) => void;
};

export const useUser = create<UserState>()((set) => ({
  token: '',
  update: (by) => set({ token: by }),
}));

export async function useUsera() {
  const router = useRouter();
  const { res } = await api.post('auth/login', data);

  useEffect(() => {
    const token = cookie.get('access_token');
    if (!token) router.replace('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
