import React, { useState } from 'react';
import BrokerSearchInput from '../common/BrokerSearchInput';
import BrokerList from './broker/BrokerList';

const TradeMain = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <BrokerSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BrokerList searchQuery={searchQuery} />
    </>
  );
};

export default TradeMain;
