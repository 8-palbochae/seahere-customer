import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useHeaderText = create(persist(
  (set) => ({
    headerText: "홈",
    setHeaderText: (text) => set({ headerText: text }),
  }),
  {
    name: 'header-storage',
    getStorage: () => sessionStorage,
  }
));

export { useHeaderText };
