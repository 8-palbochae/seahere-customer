import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../constants/trade/trade.image';

const BrokerSearchInput  = () => {
    return (
        <div className='flex w-full items-center justify-center'>
            <div className='flex w-full h-11 bg-gray-100 justify-around items-center gap-3 m-2 rounded'>
                <img className='w-8 object-cover ml-3 mr-2' src={tradeIcon.searchIcon} alt="" />
                <input className='w-full h-8 p-2 mr-2 bg-gray-200 rounded' type="text" placeholder='어종/업체 검색' />
            </div>
        </div>  
    );
};

export default BrokerSearchInput;