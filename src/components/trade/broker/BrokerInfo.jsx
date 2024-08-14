import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { tradeIcon } from '../../../constants/trade/trade.image';

const BrokerInfo = ({ company }) => {
    const { id, companyName, address } = company; 
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate(); 

    const handleLikeClick = (e) => {
        e.stopPropagation(); 
        setIsLike(!isLike);
    }

    const handleBrokerClick = () => {
        navigate(`/trades/broker/${id}`, { state: { company } });  
    }

    return (
        <div 
            className='relative w-full flex flex-row mx-3 mb-2 items-start bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer' 
            onClick={handleBrokerClick} // Add onClick handler for item click
        >
            <div className='w-20 h-20 flex items-center justify-center mr-4'>
                <img 
                    src={tradeIcon.brokerLogo} 
                    className='w-full h-full object-cover rounded-lg' 
                    alt="Broker Logo" 
                />
            </div>
            <div className='flex flex-col justify-between items-start gap-2 w-3/5'>
                <div className='text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{companyName}</div>
                <div className='w-4/5 text-sm overflow-hidden whitespace-nowrap text-ellipsis'>{`${address.mainAddress} ${address.subAddress}`}</div>
                <div className='overflow-hidden whitespace-nowrap text-ellipsis'>{address.postCode}</div>
            </div>
            <div className='absolute bottom-0 right-0 mb-2 mr-2'>
                <button onClick={handleLikeClick}>
                    <img 
                        src={isLike ? tradeIcon.likeIcon : tradeIcon.unLikeIcon} 
                        className='w-5 h-5 object-cover' 
                        alt="Like Icon" 
                    />
                </button>
            </div>
        </div>
    );
};

BrokerInfo.propTypes = {
    company: PropTypes.shape({
        id: PropTypes.number.isRequired, 
        companyName: PropTypes.string.isRequired,
        address: PropTypes.shape({
            mainAddress: PropTypes.string.isRequired,
            subAddress: PropTypes.string.isRequired,
            postCode: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default BrokerInfo;
