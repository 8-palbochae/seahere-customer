import React from 'react';
import HistoryListItem from './HistoryListItem';
import HistoryListRow from './HistoryListRow';
const HistoryList = () => {
    return (
        <div className='flex  flex-col justify-center w-full px-4' >
           <HistoryListRow/>
           <HistoryListRow/>
           <HistoryListRow/>
           <HistoryListRow/>
           <HistoryListRow/>
           <HistoryListRow/>
        </div> 
    );
};

export default HistoryList;