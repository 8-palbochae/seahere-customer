import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const cartItemShape = {
  id: null,
  name: '',
  quantity: 0,
  price: 0,
};

const useCartStore = create(persist(
  (set) => ({
    cartItems: [], // 초기 상태는 빈 배열로 설정

    addItem: (item) => set((state) => {
      const updatedCartItems = [...state.cartItems, item];
      return { cartItems: updatedCartItems };
    }),

    removeItem: (id) => set((state) => {
      const updatedCartItems = state.cartItems.filter(item => item.id !== id);
      return { cartItems: updatedCartItems };
    }),

    updateItemQuantity: (id, quantity) => set((state) => {
      const updatedCartItems = state.cartItems.map(item =>
        item.id === id ? { ...item, quantity, price: item.unitPrice * quantity } : item
      );
      return { cartItems: updatedCartItems };
    }),

    clearCart: () => set(() => ({
      cartItems: []
    })),
  }),
  {
    name: 'cart-storage', 
  }
));

export default useCartStore;
