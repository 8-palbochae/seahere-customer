import React from 'react';
import CartItemList from '../components/trade/cart/CartItemList';
import CartButtonGroup from '../components/trade/cart/CartButtonGroup';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 전달된 state를 가져옴
    const { company } = location.state || {};

    console.log(company.id);
    return (
        <div className='flex flex-col w-full max-w-4xl relative'>
            <div className='flex-grow overflow-y-auto mb-28'>
                <CartItemList/>
            </div>
           
            <div className='fixed bottom-20 w-full max-w-4xl z-20 bg-white shadow-lg'>
                <CartButtonGroup company={company}/>
            </div>
             <div className='fixed bottom-0 w-full h-20 bg-white z-10'></div>
        </div>
    );
};

export default Cart;
