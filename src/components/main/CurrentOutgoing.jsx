import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { tradeIcon } from '../../constants/trade/trade.image';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../../constants/defaultUrl';
import { profileUrl } from '../setting/profileUrl';
import { axiosInstance } from '../../api/common/axiosInstance';

const getRecentlyOutgoing = async () => {
  try {
    const response = await axiosInstance.get(`${url}/outgoings/recent`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const CurrentOutgoing = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getRecentlyOutgoing();
        if (result) {
          setData(result);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // 빈 배열을 주면 컴포넌트가 마운트될 때만 호출됨

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'Failed to fetch data'}</div>;

  const handleMoving = (id) => {
    if (data && data.company) {
      navigate(`/trades/broker/${id}`, {
        state: { company: data.company }
      });
    }
  };

  if (!data || !data.outgoingId) {
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
      <div className='bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer flex-1' onClick={() => handleMoving(data.company.id)}>
        <div className='flex flex-col w-full h-full items-center justify-center gap-2'>
          <p className='font-bold text-gray-500 w-full text-left mb-1'>최근 거래</p>
          <div className='w-24 h-24'>
            <img 
              src={data.company.profileImage ? `${profileUrl}${data.company.profileImage}` : tradeIcon.brokerLogo} 
              className='w-full h-full object-cover rounded-lg' 
              alt="Broker Logo" 
            />
          </div>
          <p className='w-full text-center'>{data.company.companyName}</p>
          <div className='w-full flex flex-col'>
            <div className='border-t-2 border-gray-300 w-full'></div>
            <p className='text-gray-800 w-full text-center mt-2'>{data.outgoingDate}</p>
            <p className='text-gray-800 w-full text-center mt-2'>{data.title}</p>
          </div>
        </div>  
      </div>   
    </div>
  );
};

CurrentOutgoing.propTypes = {};

export default CurrentOutgoing;
