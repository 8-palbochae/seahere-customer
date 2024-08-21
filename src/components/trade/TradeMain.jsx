import React, { useState,useEffect } from 'react';
import BrokerSearchInput from '../common/BrokerSearchInput';
import BrokerList from './broker/BrokerList';
import { useHeaderText } from '../../stores/headerText';

const TradeMain = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setHeaderText } = useHeaderText();

  useEffect(() => {
    setHeaderText("출고 요청");
    }, [setHeaderText]);

  return (
    <>
      <BrokerSearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BrokerList searchQuery={searchQuery} />
    </>
  );
};

export default TradeMain;
