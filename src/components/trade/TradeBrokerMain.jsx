import React from 'react';
import PropTypes from 'prop-types';
import BrokerDeatil from './broker/BrokerDeatil';
import BrokerSearchInput from '../common/BrokerSearchInput ';
import { useParams } from 'react-router-dom';

const TradeBrokerMain = () => {
  const { brokerId } = useParams();

  return (
    <>
        <BrokerSearchInput/>
        <BrokerDeatil id={brokerId}/>
    </>
  );
};

TradeBrokerMain.propTypes = {};

export default TradeBrokerMain;