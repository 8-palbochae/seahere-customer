import React, { useState } from 'react';
import BrokerSearchInput from '../common/BrokerSearchInput';
import FollowList from './broker/FollowList';

const FollowMain = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='flex flex-col items-center'>
      <BrokerSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FollowList searchQuery={searchQuery} />
    </div>
  );
};

export default FollowMain;
