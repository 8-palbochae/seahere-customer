import React from 'react';
import PropTypes from 'prop-types';
import OutgoingDetailItem from '../items/OutgoingDetailItem';
import dayjs from "dayjs";


const OutgoingDetailList = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col p-4'>
                <div className='font-bold text-xl mb-1'>주문 상세 정보</div>
                <div className='flex flex-col gap-1'>
                    <div>
                        <span>주문 일시 : </span>
                        <span>{dayjs().format('YYYY-MM-DD HH:mm')}</span>
                    </div>
                    <div>
                        <span>주문 상품 : </span>
                        <span>10개</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <OutgoingDetailItem/>
                <OutgoingDetailItem/>
                <OutgoingDetailItem/>
                <OutgoingDetailItem/>
                <OutgoingDetailItem/>
            </div>
        </div>
    );
};

OutgoingDetailList.propTypes = {};

export default OutgoingDetailList;