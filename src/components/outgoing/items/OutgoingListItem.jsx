import React from 'react';
import PropTypes from 'prop-types';
import dayjs from "dayjs";
import { tradeIcon } from '../../../constants/trade/trade.image';
import { useNavigate } from 'react-router-dom';


const OutgoingListItem = ({outgoing}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/outgoings/${outgoing.outgoingId}`);
    };

    const status = {
        'PENDING' : '출고요청',
        'READY' : '출고대기',
        'COMPLETE' : '출고완료',
        'REJECT' : '출고거절'
    }

    return (
        <div className='w-full flex flex-col p-5 gap-3' onClick={handleClick}>
            <div className='flex justify-between font-semibold'>
                <div>{dayjs().format('YYYY-MM-DD')}</div>
                <div className='border border-gray-600 rounded-2xl w-3/12 text-center'>출고상세</div>
            </div>
            <div className='w-full flex gap-5'>
                <div className=''>
                    <div className='w-20 h-20'>
                        <img src={tradeIcon.brokerLogo} alt="" className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>
                <div className='flex flex-col w-4/5 gap-1'>
                    <div className='font-bold text-xl'>{outgoing.company.companyName}</div>
                    <div className='flex gap-3'>
                        <span>{outgoing.title}</span>
                        <span>{`${outgoing.price.toLocaleString()}원`}</span>
                    </div>
                    <div className='border-2 border-blue-500 rounded-2xl w-5/12 text-center'>
                        <span className='font-bold'>{status[outgoing.state]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

OutgoingListItem.propTypes = {};

export default OutgoingListItem;