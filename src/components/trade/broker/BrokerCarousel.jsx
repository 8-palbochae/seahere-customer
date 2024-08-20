import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { tradeIcon } from '../../../constants/trade/trade.image';
import { useSwipeable } from 'react-swipeable';

const BrokerCarousel = ({ companies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleNavigate = (company) => {
        navigate(`/trades/broker/${company.id}`, { state: { company } });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
    };

    useEffect(() => {
        if (companies.length > 0) {
            const interval = setInterval(handleNext, 3000);
            return () => clearInterval(interval);
        }
    }, [companies.length]);

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleModify = () => {
        navigate('/following');
    };

    if (companies.length === 0) {
        return <div className="text-center">팔로우한 업체가 없습니다.</div>;
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-2" {...handlers}>
            <div className="flex justify-center items-center mb-2">
                <div
                    className="flex-none w-24 h-24 cursor-pointer bg-white shadow rounded-lg"
                    onClick={() => handleNavigate(companies[currentIndex])}
                >
                    <img
                        src={companies[currentIndex]?.logoUrl || tradeIcon.brokerLogo || 'default-logo.png'}
                        alt={`${companies[currentIndex]?.companyName || 'No Name'} Logo`}
                        className="w-full h-16 object-cover rounded-t-lg"
                    />
                    <p className="text-center text-xs mt-1 truncate">
                        {companies[currentIndex]?.companyName || '이름 없음'}
                    </p>
                </div>
            </div>
            <p
                className='text-gray-800 w-full text-center mt-2 cursor-pointer text-sm'
                onClick={handleModify}
            >
                관심 업체 등록 / 수정
            </p>
        </div>
    );
};

BrokerCarousel.propTypes = {
    companies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        companyName: PropTypes.string.isRequired,
        logoUrl: PropTypes.string,
    })).isRequired,
};

export default BrokerCarousel;
