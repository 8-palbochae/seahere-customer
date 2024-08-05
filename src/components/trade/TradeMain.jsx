import React from 'react';
import PropTypes from 'prop-types';
import BrokerSearchInput from '../common/BrokerSearchInput ';
import BrokerList from './broker/BrokerList';

const TradeMain = () => {
  return (
    <>
      <BrokerSearchInput/>
      <BrokerList/>
    </>
  );
};

TradeMain.propTypes = {};

export default TradeMain;