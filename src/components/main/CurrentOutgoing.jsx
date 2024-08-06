import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { tradeIcon } from '../../constants/trade/trade.image';

const CurrentOutgoing = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <p className='font-bold text-lg mb-2 ml-1'>⚡ 빠른 출고 요청</p>
            <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer flex-1'>
                <div className='flex flex-col w-full h-full items-center justify-center gap-2'>
                    <p className='font-bold text-gray-500 w-full text-left mb-1'>최근 거래</p>
                    <div className='w-20 h-20'>
                        <img 
                        src={tradeIcon.brokerLogo} 
                        className='w-full h-full object-cover rounded-lg' 
                        alt="Broker Logo" 
                        />
                    </div>
                    <p className='w-full text-center'>테스트 수산</p>
                    <div className='w-full flex flex-col'>
                        <div className='border-t-2 border-gray-300 w-full'></div>
                        <p className='text-gray-800 w-full text-center mt-2'>{dayjs().format('YYYY-MM-DD')}</p>
                        <p className='text-gray-800 w-full text-center mt-2'>넙치 외 3건</p>
                    </div>
                </div>  
            </div>   
        </div>
    );
};

CurrentOutgoing.propTypes = {};

export default CurrentOutgoing;
