import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthenticationStore = create(persist(
  (set) => ({
    accessToken: null, 
    refreshToken: null,
    setAccessToken: (token) => set({ accessToken: token }), 
    setRefreshToken: (token) => set({ refreshToken: token }), 
  }),
  {
    name: 'jwt-storage', 
    getStorage: () => localStorage, 
  }
));

const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = value;
    return acc;
  }, {});
  return cookies[name];
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/;`;
};

export {useAuthenticationStore,getCookie,deleteCookie};
