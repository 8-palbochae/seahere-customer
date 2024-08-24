import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../api/common/axiosInstance';
import BrokerInfo from '../trade/broker/BrokerInfo';
import { url } from '../../constants/defaultUrl';


const getMostOutgoingCompany = async () => {
  try {
    const response = await axiosInstance.get(`${url}/companies/c/best`);
    if (response.status === 200) {
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

const RecommandBroker = () => {
  const query = useQuery({
    queryKey: ['bestCompany'],
    queryFn: getMostOutgoingCompany,
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.error) return <div>Error: {query.error.message || 'Failed to fetch data'}</div>;
  if (!query.data) {
    return <div>No company data available.</div>;
  }

  const { id, companyName, address, profileImage, followed } = query.data;

  const company = {
    id: id,
    companyName: companyName,
    address: address,
    profileImage: profileImage,
    isFollowed: followed !== undefined ? followed : false
  };

  return (
    <>
      <BrokerInfo company={company} />
    </>
  );
};


export default RecommandBroker;
