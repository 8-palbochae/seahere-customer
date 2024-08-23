import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import OutgoingDetailItem from '../items/OutgoingDetailItem';
import dayjs from 'dayjs';
import { axiosInstance } from '../../../api/common/axiosInstance';
import { url } from '../../../constants/defaultUrl';

const OutgoingDetailList = () => {
    const { outgoingId } = useParams(); 
    const [outgoingDetails, setOutgoingDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOutgoingDetails = async () => {
            try {
                const response = await axiosInstance.get(`${url}/outgoings/${outgoingId}`);
                setOutgoingDetails(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOutgoingDetails();
    }, [outgoingId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col p-4'>
                <div className='font-bold text-xl mb-1'>주문 상세 정보</div>
                <div className='flex flex-col gap-1'>
                    <div>
                        <span>주문 일시 : </span>
                        <span>{outgoingDetails[0].outgoingDate}</span>
                    </div>
                    <div>
                        <span>주문 상품 : </span>
                        <span>{outgoingDetails.length}개</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                {outgoingDetails.map(detail => (
                    <OutgoingDetailItem key={detail.outgoingDetailId} detail={detail} />
                ))}
            </div>
        </div>
    );
};

OutgoingDetailList.propTypes = {
    outgoingId: PropTypes.string, // Optional since we are using useParams to get outgoingId
};

export default OutgoingDetailList;
