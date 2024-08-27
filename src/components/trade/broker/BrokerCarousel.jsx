import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { tradeIcon } from '../../../constants/trade/trade.image';
import { useSwipeable } from 'react-swipeable';
import { profileUrl } from '../../setting/profileUrl';

const BrokerCarousel = ({ companies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const companiesWithIsFollowed = companies.map((company) => ({
        ...company,
        isFollowed: company.followed,
    }));
    console.log(companies);
    const handleNavigate = (company) => {
        navigate(`/trades/broker/${company.id}`, { state: { company } });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companiesWithIsFollowed.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + companiesWithIsFollowed.length) % companiesWithIsFollowed.length);
    };

    useEffect(() => {
        if (companiesWithIsFollowed.length > 0) {
            const interval = setInterval(handleNext, 3000);
            return () => clearInterval(interval);
        }
    }, [companiesWithIsFollowed.length]);

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    if (companiesWithIsFollowed.length === 0) {
        return <div className="text-center">팔로우한 업체가 없습니다.</div>;
    }

    return (
        <div className="w-full flex flex-col items-center p-2" {...handlers}>
            <div className="flex flex-col justify-center items-center mb-2">
            <p className='font-bold text-gray-500 w-full text-left mb-1'>팔로우</p>

                <div
                    className="flex-none w-full items-center cursor-pointer bg-white shadow rounded-lg mt-2"
                    onClick={() => handleNavigate(companiesWithIsFollowed[currentIndex])}
                >
                    <div className='w-24 h-24'>
                        <img
                            src={companiesWithIsFollowed[currentIndex].profileImage ? `${profileUrl}${companiesWithIsFollowed[currentIndex].profileImage}` : tradeIcon.brokerLogo}
                            alt={`${companiesWithIsFollowed[currentIndex]?.companyName || 'No Name'} Logo`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <p className="text-center mt-1 truncate">
                        {companiesWithIsFollowed[currentIndex]?.companyName || '이름 없음'}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full mt-8'>
                <div className='border-t-2 border-gray-300 w-full'></div>
                <p
                    className='text-gray-800 w-full text-center mt-2 cursor-pointer text-sm'
                    onClick={() => navigate('/following')}
                >
                    관심 업체 등록 / 수정
                </p>
            </div>
        </div>
    );
};

BrokerCarousel.propTypes = {
    companies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        companyName: PropTypes.string.isRequired,
        logoUrl: PropTypes.string,
        followed: PropTypes.bool.isRequired,
    })).isRequired,
};

export default BrokerCarousel;
