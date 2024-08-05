// src/components/TradeInventoryContent.js

import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../../constants/trade/trade.image';

const BrokerInventoryItem = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full border border-gray-300 rounded-md'>
            <div className='w-1/5 flex flex-col items-center text-center p-2 '>
                {/* Square container for image */}
                <div className='relative w-14 h-14'>
                    <img 
                        src={tradeIcon.brokerLogo} 
                        className='w-full h-full object-cover rounded-md' 
                        alt="Trade Icon" 
                    />
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-center text-center border-l border-gray-300 p-2'>
                <div className='text-lg font-bold'>광어</div>
                <div className='text-md'>활어</div>
            </div>
            <div className='w-1/5 flex flex-col items-center text-center border-l border-gray-300 p-2'>
                <div className='text-md'>국내산</div>
                <div className='text-md'>자연산</div>
            </div>
            <div className='w-1/5 flex flex-col items-center text-center border-l border-gray-300 p-2'>
                <div>
                    <span className='font-bold text-blue-600'>40</span>
                    <span> Kg</span>
                </div>
            </div>
        </div>
    );
};

BrokerInventoryItem.propTypes = {};

export default BrokerInventoryItem;
