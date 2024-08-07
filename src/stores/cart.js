import create from 'zustand';

// 장바구니 항목을 위한 구조체 정의 (필요에 따라 수정)
const cartItemShape = {
  id: null,
  name: '',
  quantity: 0,
  price: 0,
};

const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // 로컬 스토리지에서 초기 장바구니 항목 불러오기

  addItem: (item) => set((state) => {
    const updatedCartItems = [...state.cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    return { cartItems: updatedCartItems };
  }),

  removeItem: (id) => set((state) => {
    const updatedCartItems = state.cartItems.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    return { cartItems: updatedCartItems };
  }),

  updateItemQuantity: (id, quantity) => set((state) => {
    const updatedCartItems = state.cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    return { cartItems: updatedCartItems };
  }),

  clearCart: () => set(() => {
    localStorage.removeItem('cartItems');
    return { cartItems: [] };
  }),
}));

export default useCartStore;
