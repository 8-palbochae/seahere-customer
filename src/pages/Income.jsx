import React, { useState } from 'react';
import IncomingInfo from '../components/incoming/IncomingInfo';
import { useLocation } from "react-router-dom";

const Income = () => {
    const location = useLocation();
    const { selectedProduct } = location.state || {};

    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [isAmountValid, setIsAmountValid] = useState(false);
    const [isPriceValid, setIsPriceValid] = useState(false);

    const handleAmountChange = (value, valid) => {
        setAmount(value);
        setIsAmountValid(valid);
    };

    const handlePriceChange = (value, valid) => {
        setPrice(value);
        setIsPriceValid(valid);
    };

    return (
        <div className='overflow-y-auto'>
            <IncomingInfo
                onAmountChange={handleAmountChange}
                onPriceChange={handlePriceChange}
                isAmountValid={isAmountValid}
                isPriceValid={isPriceValid}
                selectedProduct={selectedProduct}
            />
        </div>
    );
};

export default Income;
