import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BrokerInfo from './BrokerInfo';
// import withTradeClickHandler from '../../../hooks/trade/withTradeClickHandler';
import BrokerInventory from '../inventory/BrokerInventory';
// import InventoryItemDetails from '../../inventory/InventoryItemDetails';

const BrokerDeatil = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    // const ClickableInventoryItem = withTradeClickHandler(InventoryItemDetails, handleItemClick);

    return (
        <div className='w-11/12 flex flex-col items-center justify-center '>
            <BrokerInfo/>
            <BrokerInventory/>
        </div>
    );
};

BrokerDeatil.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BrokerDeatil;
