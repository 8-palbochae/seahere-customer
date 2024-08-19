import React, { useState } from 'react';
import BrokerSearchInput from '../common/BrokerSearchInput';
import FollowList from './broker/FollowList';

const FollowMain = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <BrokerSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FollowList searchQuery={searchQuery} />
    </>
  );
};

export default FollowMain;
