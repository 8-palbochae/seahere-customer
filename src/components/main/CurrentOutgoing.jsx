import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { tradeIcon } from '../../constants/trade/trade.image';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../api/common/axiosInstance';

const getRecentlyOutgoing = async () => {
  try {
    const response = await axiosInstance.get('/outgoings/recent');
    if (response.status === 200) {
		console.log(response.data);
      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching today info:', error);
    return null;
  }
};

const CurrentOutgoing = () => {
    const query = useQuery({
        queryKey: ['recentOugoing'], 
        queryFn: getRecentlyOutgoing, 
    });

    if (query.isLoading) return <div>Loading...</div>;
    if (query.error) return <div>Error: {query.error.message || 'Failed to fetch data'}</div>;
    console.log('최근:', query.data);

    if (!query.data.outgoingId) {
        return (
            <div className='flex flex-col w-full h-full items-center justify-center'>
                <p className='font-bold text-lg mb-2'>⚡ 빠른 출고 요청</p>
                <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full flex-1'>
                    <div className='flex flex-col w-full h-full items-center justify-center gap-2'>
                        <p className='font-bold text-gray-500 w-full h-full text-center items-start mb-1'>최근 거래</p>
                        <p className='w-full h-full text-center'>거래 내역이 존재하지 않습니다</p>
                    </div>
                </div>
            </div>
        );
    }


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
