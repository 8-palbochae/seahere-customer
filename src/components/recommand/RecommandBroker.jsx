import React from 'react';
import PropTypes from 'prop-types';
import BrokerItem from '../trade/broker/BrokerInfo';
import Company from './../../types/Company';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../api/common/axiosInstance';

const getMostOutgoingCompany = async () => {
  try {
    const response = await axiosInstance.get('/companies/best');
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

    const {id,companyName,address,profileImage} = query.data;
    const company = {
        id:id,
        companyName:companyName,
        address:address,
        profileImage : profileImage
    }
    return (
        <>
            <BrokerItem id={'100000'} company={company}/>
        </>
    );
};

RecommandBroker.propTypes = {};

export default RecommandBroker;