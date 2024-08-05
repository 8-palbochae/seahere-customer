import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../../constants/trade/trade.image';
import { inventoryIcon } from '../../../constants/inventory/inventory.image';

const CartItem = () => {
    return (
        <div className='flex justify-around items-center p-4 border rounded-md shadow-md w-full'>
            <div className='w-16 h-16'>
                <img src={tradeIcon.brokerLogo} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
            <div className='flex flex-col w-full pl-4'>
                <div className='flex justify-around mb-2'>
                    <span className='font-bold'>광어</span>
                    <span>국내산</span>
                    <span>활어</span>
                    <span>자연산</span>
                </div>
                <div className='flex justify-end items-end self-end w-full'>
                    <div className='flex justify-around w-full'>
                        <button className='border rounded-full w-8 h-8 font-semibold'>-</button>
                        <input
                            className='text-center text-black mx-2 w-12 border-b-2 border-transparent focus:border-blue-500 outline-none transition-colors duration-200'
                            type="text"
                            placeholder='0'
                        />
                        <button className='border rounded-full w-8 h-8 font-semibold'>+</button>
                    </div>
                    <button className='p-1 w-8 h-8'><img src={inventoryIcon.deleteIcon} className='w-full h-full object-cover' alt="" /></button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {};

export default CartItem;
