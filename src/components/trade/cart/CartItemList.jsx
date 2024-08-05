import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartItemList = () => {
    return (
        <div className='flex flex-col items-center p-2'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
};

CartItemList.propTypes = {};

export default CartItemList;