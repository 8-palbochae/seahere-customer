import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useCartStore from '../../../stores/cart'; 

const CartModal = ({ isOpen, onClose, inventory, companyId, children }) => {
    const [weight, setWeight] = useState(''); 
    const { addItem, updateItemQuantity, cartItems, clearCart, company: cartCompanyId } = useCartStore((state) => ({
        addItem: state.addItem,
        updateItemQuantity: state.updateItemQuantity,
        cartItems: state.cartItems,
        clearCart: state.clearCart,
        company: state.company,
    }));

    if (!isOpen) return null;

    const handleWeightChange = (e) => {
        let value = e.target.value === '' ? '' : Math.max(Number(e.target.value), 0);
        if (value > inventory.quantity) {
            value = inventory.quantity;
        }
        setWeight(value);
    };

    const handleAddToCart = () => {
        const item = {
            id: inventory.inventoryId,
            name: inventory.name,
            unitPrice: inventory.price,
            quantity: Number(weight),
            price: inventory.price * Number(weight),
            country: inventory.country,
            naturalStatus: inventory.naturalStatus,
            category: inventory.category,
            companyId: companyId,
            productImg : inventory.imgUrl,
        };

        if (weight <= 0) {
            alert('Please enter a valid weight.');
            return;
        }

        if (cartCompanyId && cartCompanyId !== companyId) {
            if (!window.confirm('장바구니는 같은 중매인의 상품만 담을 수 있습니다.(담기 클릭 시 이전에 담은 상품은 삭제 됩니다)')) {
                return;
            }
            clearCart(); 
        }

        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            updateItemQuantity(item.id, existingItem.quantity + item.quantity);
        } else {
            addItem(item);
        }

        setWeight('');
        onClose();
    };

    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-4 rounded-md shadow-lg max-w-5xl mx-auto w-11/12'>
                <div className='flex flex-col h-full w-full'>
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <div className='w-full h-full flex flex-col items-center px-4 mb-4'>
                        <div className='w-full flex items-center justify-between mb-4'>
                            <label className='text-gray-700 text-lg font-bold'>무게 (Kg):</label>
                            <input 
                                className='text-center text-black border-b-2 border-transparent focus:border-blue-500 outline-none transition-colors duration-200' 
                                type="number" 
                                value={weight}
                                onChange={handleWeightChange}
                                placeholder="0" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-center text-center text-lg'>
                        <span className='text-gray-500'>구매 금액:</span> <span className='text-black font-bold ml-2'>{(inventory.price * weight).toLocaleString()} 원</span>
                    </div>
                    <div className='flex justify-center gap-3 mt-4'>
                        <button 
                            onClick={onClose} 
                            className='w-full bg-gray-400 text-white px-4 py-2 rounded'
                        >
                            취소
                        </button>
                        <button 
                            onClick={handleAddToCart} 
                            className='w-full bg-blue-600 text-white px-4 py-2 rounded'
                        >
                            담기
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

CartModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    inventory: PropTypes.shape({
        inventoryId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        naturalStatus: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired, // 추가된 필드
    }).isRequired,
    companyId: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default CartModal;
