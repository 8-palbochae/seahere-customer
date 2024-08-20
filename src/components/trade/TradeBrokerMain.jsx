import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BrokerDetail from './broker/BrokerDetail';
import BrokerSearchInput from '../common/BrokerSearchInput';
import { useParams } from 'react-router-dom';

const TradeBrokerMain = () => {
  const { brokerId } = useParams();

  if (!brokerId) {
    return <p>Broker ID is missing</p>;
  }

  return (
    <>
      <BrokerDetail id={brokerId} />
    </>
  );
};

TradeBrokerMain.propTypes = {};

export default TradeBrokerMain;
