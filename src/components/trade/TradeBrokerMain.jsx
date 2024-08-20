import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import BrokerDetail from './broker/BrokerDetail';
import BrokerSearchInput from '../common/BrokerSearchInput';
import { useParams } from 'react-router-dom';
import { useHeaderText } from '../../stores/headerText';
const TradeBrokerMain = () => {
  const { brokerId } = useParams();
  const { setHeaderText } = useHeaderText();

  useEffect(() => {
    setHeaderText("재고 목록");
    }, [setHeaderText]);
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
