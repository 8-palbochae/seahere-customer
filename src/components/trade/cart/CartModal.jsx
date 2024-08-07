import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useCartStore from '../../../stores/cart'; // Zustand 스토어의 실제 경로를 사용하세요

const CartModal = ({ isOpen, onClose, inventory, children }) => {
    const [weight, setWeight] = useState(''); 
    const addItem = useCartStore((state) => state.addItem);
    const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
    const cartItems = useCartStore((state) => state.cartItems);

    if (!isOpen) return null;

    // 무게 입력 함수
    const handleWeightChange = (e) => {
        const value = e.target.value === '' ? '' : Math.max(Number(e.target.value), 0); // 빈 문자열 처리
        setWeight(value);
    };

    const handleAddToCart = () => {
        const item = {
            id: inventory.id,
            name: inventory.name,
            unitPrice : inventory.price,
            quantity: Number(weight),
            price: inventory.price * Number(weight),
            country: inventory.country,
            naturalStatus: inventory.naturalStatus,
            category: inventory.category,
        };

        // 장바구니에 이미 아이템이 있는지 확인
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // 아이템이 이미 장바구니에 있는 경우 수량 업데이트
            updateItemQuantity(item.id, existingItem.quantity + item.quantity);
        } else {
            // 아이템이 장바구니에 없는 경우 새로 추가
            if (item.quantity !== 0) {
                addItem(item);
            }
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
                                placeholder="0" // 빈 상태에서 '0'을 기본값으로 표시
                            />
                        </div>
                    </div>
                   
                    <div className='flex justify-center text-center text-lg'>
                        <span className='text-gray-500'>구매 금액:</span> <span className='text-black font-bold ml-2'>{inventory.price * weight} 원</span>
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        naturalStatus: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node,
};

export default CartModal;
