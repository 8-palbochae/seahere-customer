import React from 'react';
import PropTypes from 'prop-types';
import { inventoryIcon } from '../../constants/inventory/inventory.image';

const NoQRSearchInput = () => {
    return (
        <div>
            <div className='flex h-11 bg-gray-100 justify-around items-center gap-3 m-2 rounded'>
                <img className='w-8 object-cover ml-3 mr-2' src={inventoryIcon.searchIcon} alt="" />
                <input className='w-4/5 h-8 p-2 bg-gray-200 rounded' type="text" placeholder='검색' />
            </div>
        </div>
    );
};

export default NoQRSearchInput;