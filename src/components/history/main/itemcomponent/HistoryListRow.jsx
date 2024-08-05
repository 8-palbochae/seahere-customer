import React from 'react';
import PropTypes from 'prop-types';
import HistoryListItem from './HistoryListItem';
import dayjs from 'dayjs';
const HistoryListRow = () => {
  return (
    <>
      <div className='flex flex-col w-full shadow-lg mt-3'>
        <div className='text-gray-600 font-semibold text-sm mb-1'>
          {dayjs().format('YYYY-MM-DD')}
        </div>
        <div className='flex w-full'> 
          <HistoryListItem type={"출고"}/>
          <HistoryListItem type={"입고"}/>
          <HistoryListItem type={"조정"}/>
        </div>
      </div>
    </>
  );
};

HistoryListRow.propTypes = {};

export default HistoryListRow;