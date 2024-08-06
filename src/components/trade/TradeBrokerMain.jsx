import React from 'react';
import PropTypes from 'prop-types';
import BrokerDeatil from './broker/BrokerDeatil';
import BrokerSearchInput from '../common/BrokerSearchInput ';
import { useParams } from 'react-router-dom';

const TradeBrokerMain = () => {
  const { brokerId } = useParams(); // brokerId를 가져옴

  if (!brokerId) {
    return <p>Broker ID is missing</p>; // ID가 없을 경우 처리
  }

  return (
    <>
        <BrokerSearchInput />
        <BrokerDeatil id={brokerId} />
    </>
  );
};

TradeBrokerMain.propTypes = {};

export default TradeBrokerMain;
