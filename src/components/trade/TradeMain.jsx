import React, { useState } from 'react';
import BrokerSearchInput from '../common/BrokerSearchInput';
import BrokerList from './broker/BrokerList';

const TradeMain = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='flex flex-col items-center'>
      <BrokerSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BrokerList searchQuery={searchQuery} />
    </div>
  );
};

export default TradeMain;
