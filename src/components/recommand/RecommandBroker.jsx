import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BrokerInfo from '../trade/broker/BrokerInfo';
import { url } from '../../constants/defaultUrl';
import { axiosInstance } from '../../api/common/axiosInstance';

const getMostOutgoingCompany = async () => {
  try {
    const response = await axiosInstance.get(`${url}/companies/customer/best`);
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

const RecommandBroker = () => {
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getMostOutgoingCompany();
        if (data) {
          console.log(data);
          setCompany({
            id: data.id,
            companyName: data.companyName,
            address: data.address,
            profileImage: data.profileImage,
            isFollowed: data.followed !== undefined ? data.followed : false,
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'Failed to fetch data'}</div>;
  if (!company) return <div>추천 매장이 존재하지 않습니다</div>;

  return <BrokerInfo company={company} />;
};

export default RecommandBroker;
