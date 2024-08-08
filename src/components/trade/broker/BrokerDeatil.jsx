import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BrokerInfo from './BrokerInfo';
import BrokerInventory from '../inventory/BrokerInventory';
import { useLocation, useParams } from 'react-router-dom';

const BrokerDeatil = () => {
const BrokerDeatil = () => {
    const { brokerId } = useParams(); 
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const company = location.state?.company;

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className='w-11/12 flex flex-col items-center justify-center '>
            <BrokerInfo company={company}/>
        
            <div className='w-full text-left text-gray-500'>표기된 금액은 kg 당 금액 입니다</div>
            <div className='w-full text-xl font-bold my-2'>재고 목록</div>
            <BrokerInventory id={brokerId} company={company}/>
        </div>
    );
};

BrokerDeatil.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BrokerDeatil;
