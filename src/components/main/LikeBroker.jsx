import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../constants/trade/trade.image';

const LikeBroker = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <p className='font-bold text-lg mb-2 ml-1'>💕 관심업체 관리</p>
            <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer w-full flex-1'>
                <div className='flex flex-col w-full items-center justify-center gap-2'>
                    <p className='font-bold text-gray-500 w-full text-left mb-1'>주거래 업체</p>
                    <div className='w-20 h-20'>
                        <img 
                        src={tradeIcon.brokerLogo} 
                        className='w-full h-full object-cover rounded-lg' 
                        alt="Broker Logo" 
                        />
                        
                    </div>
                    <p className='w-full text-center'>테스트 수산</p>
                    <div className='border-t-2 border-gray-300 w-full'></div>
                    <div className='w-full h-full flex flex-col items-center'>
                        <p className='text-gray-800 w-full text-center mt-2'>관심 업체 등록 /수정</p>
                    </div>
                </div>  
            </div>   
        </div>
    );
};

LikeBroker.propTypes = {};

export default LikeBroker;