import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
  (set, get) => ({
    cartItems: [], 
    company: null, 

    addItem: (item) => {
      const { cartItems, company } = get();
      
      if (company && company !== item.companyId) {
        if (window.confirm('다른 중매인의 상품을 담았습니다. 장바구니가 초기화 됩니다.')) {
          return set(() => ({
            cartItems: [item],
            company: item.companyId,
          }));
        } else {
          return; 
        }
      }

      const updatedCartItems = [...cartItems, item];
      return set(() => ({
        cartItems: updatedCartItems,
        company: item.companyId,
      }));
    },

    removeItem: (id) => set((state) => {
      const updatedCartItems = state.cartItems.filter(item => item.id !== id);
      const remainingItems = updatedCartItems.length > 0;
      const newCompany = remainingItems ? state.company : null;
      return { cartItems: updatedCartItems, company: newCompany };
    }),

    updateItemQuantity: (id, quantity) => set((state) => {
      const updatedCartItems = state.cartItems.map(item =>
        item.id === id ? { ...item, quantity, price: item.unitPrice * quantity } : item
      );
      return { cartItems: updatedCartItems };
    }),

    clearCart: () => set(() => ({
      cartItems: [],
      company: null,
    })),
  }),
  {
    name: 'cart-storage', 
  }
));

export default useCartStore;
