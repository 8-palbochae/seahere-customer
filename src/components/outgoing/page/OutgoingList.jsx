import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OutgoingListItem from '../items/OutgoingListItem';
import OutgoingSearch from '../OutgoingSearch';

const OutgoingList = () => {
    const {searchWord, setSearchWord} = useState('');

    return (
        <div className='w-full'>
            <OutgoingSearch searchWord={searchWord} setSearchWord={setSearchWord}/>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div>
            <OutgoingListItem/>  
            <div className='h-3 bg-gray-200'></div>
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