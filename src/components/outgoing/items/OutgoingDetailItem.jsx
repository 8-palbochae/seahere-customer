import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../../constants/trade/trade.image';

const OutgoingDetailItem = ({detail}) => {
    return (
        <div className='flex flex-col w-full gap-4 justify-start p-5 border-b border-gray-400'> 
            <div className='font-bold text-sm w-1/5 text-center border border-gray-400 rounded-xl'>출고 확정</div>
            <div className='flex gap-4 justify-start'>
                <div className='w-20 h-20'>
                    <img src={tradeIcon.brokerLogo} className='w-full h-full object-cover rounded-lg' alt="" />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-full font-bold text-xl'>{detail.productName}</div>
                    <div className='w-full text-gray-600'>{`${detail.category} ${detail.naturalStatus} ${detail.country}`}</div>
                    <div className='w-full font-semibold flex gap-4'>
                        <div>{detail.outgoingQuantity} <span className='font-normal'>Kg</span></div>
                        <div>{detail.price.toLocaleString()} <span className='font-normal'>원</span></div>    
                    </div>
                </div>
                </div>
        </div>
    );
};

OutgoingDetailItem.propTypes = {};

export default OutgoingDetailItem;