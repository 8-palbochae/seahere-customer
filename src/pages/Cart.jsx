import React,{useEffect} from 'react';
import CartItemList from '../components/trade/cart/CartItemList';
import CartButtonGroup from '../components/trade/cart/CartButtonGroup';
import { useHeaderText } from '../stores/headerText';
const Cart = () => {
    const { setHeaderText } = useHeaderText();

  useEffect(() => {
    setHeaderText("장바구니");
    }, [setHeaderText]);
    return (
        <div className='flex flex-col w-full max-w-4xl h-screen relative'>
            <div className='flex-grow overflow-y-auto'>
                <CartItemList/>
            </div>
            <div className='fixed bottom-20 w-full max-w-4xl z-20 bg-white shadow-lg'>
                <CartButtonGroup/>
            </div>
            <div className='fixed bottom-0 w-full h-20 bg-white z-10'></div>
        </div>
    );
};

export default Cart;
