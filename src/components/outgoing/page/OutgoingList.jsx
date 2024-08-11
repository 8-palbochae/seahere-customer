import React from 'react';
import PropTypes from 'prop-types';
import OutgoingListItem from '../items/OutgoingListItem';
import BrokerSearchInput from '../../common/BrokerSearchInput';

const OutgoingList = () => {
    return (
        <div className='w-full'>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div> 
        </div>
    );
};

OutgoingList.propTypes = {};

export default OutgoingList;