import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../../constants/trade/trade.image';
import { inventoryIcon } from '../../../constants/inventory/inventory.image';
import useCartStore from '../../../stores/cart'; 

const CartItem = ({ cartItem }) => {
    const { addItem, updateItemQuantity, removeItem, cartItems, clearCart, company: cartCompanyId } = useCartStore((state) => ({
        addItem: state.addItem,
        updateItemQuantity: state.updateItemQuantity,
        removeItem: state.removeItem,
        cartItems: state.cartItems,
        clearCart: state.clearCart,
        company: state.company,
    }));

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) return;

        const updatedItem = { ...cartItem, quantity: newQuantity };

        if (cartItems.find(item => item.id === updatedItem.id)) {
            updateItemQuantity(updatedItem.id, newQuantity);
        } else {
            addItem(updatedItem);
        }
    };

    const decreaseHandle = () => {
        handleQuantityChange(cartItem.quantity - 1);
    };

    const increaseHandle = () => {
        handleQuantityChange(cartItem.quantity + 1);
    };

    const deleteHandle = () => {
        removeItem(cartItem.id); 
    };

    return (
        <div className='flex justify-around items-center p-4 border rounded-md shadow-md w-full'>
            <div className='w-16 h-16'>
                <img src={tradeIcon.brokerLogo} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
            <div className='flex flex-col w-full pl-4'>
                <div className='flex justify-around mb-2'>
                    <span className='font-bold'>{cartItem.name}</span>
                    <span>{cartItem.country}</span>
                    <span>{cartItem.category}</span>
                    <span>{cartItem.naturalStatus}</span>
                </div>
                <div className='flex justify-end items-end self-end w-full'>
                    <div className='flex justify-around w-full'>
                        <button 
                            className='border rounded-full w-8 h-8 font-semibold' 
                            onClick={decreaseHandle}
                            disabled={cartItem.quantity <= 1} 
                        >
                            -
                        </button>
                        <input
                            className='text-center text-black mx-2 w-12 border-b-2 border-transparent focus:border-blue-500 outline-none transition-colors duration-200'
                            type="text"
                            value={cartItem.quantity}
                            readOnly
                        />
                        <button 
                            className='border rounded-full w-8 h-8 font-semibold' 
                            onClick={increaseHandle}
                        >
                            +
                        </button>
                    </div>
                    <button className='p-1 w-8 h-8' onClick={deleteHandle}>
                        <img src={inventoryIcon.deleteIcon} className='w-full h-full object-cover' alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        naturalStatus: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;
