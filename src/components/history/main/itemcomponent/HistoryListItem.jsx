import React from 'react';
import outgoingIcon from "../../../../assets/history/outgoing-icon.svg"; // SVG 파일을 이미지로 가져오기
import incomingIcon from "../../../../assets/history/incoming-icon.svg";
import adjustIcon from "../../../../assets/history/adjust-icon.svg";
import useHistoryHandler from '../../../../hooks/History/historyHandler';

const HistoryListItem = ({ type }) => {
    const { handleNavigation } = useHistoryHandler();
    
    // 아이콘 매핑 객체
    const iconMap = {
        출고: outgoingIcon,
        입고: incomingIcon,
        조정: adjustIcon,
    };

    const typeColor = {
        출고: 'text-red-600',
        입고: 'text-blue-600',
        조정: 'text-green-600',
    };

    // 선택된 아이콘
    const iconSrc = iconMap[type];

    return (
        <div
            className='flex flex-col w-full mb-1 shadow-md rounded-lg py-4 px-3 bg-white text-center cursor-pointer'
            onClick={() => handleNavigation(type)}
        >
            <div className='flex w-full items-center justify-around text-center'>
                <div>
                    <img 
                        src={iconSrc} 
                        alt={`${type} 아이콘`} 
                        className='w-9 h-9'
                        style={{ filter: type === '출고' ? 'invert(29%) sepia(88%) saturate(7381%) hue-rotate(2deg) brightness(93%) contrast(92%)' : type === '입고' ? 'invert(23%) sepia(50%) saturate(2478%) hue-rotate(183deg) brightness(98%) contrast(103%)' : 'invert(36%) sepia(73%) saturate(3056%) hue-rotate(148deg) brightness(95%) contrast(103%)' }} // 색상 조정
                    />
                </div>
                <div className=''>
                    <div className={`font-bold text-xl ${typeColor[type]}`}>{type}</div>
                    <span className='text-gray-500 text-md font-semibold'>{'5건'}</span>
                </div>
            </div>
        </div>
    );
};

export default HistoryListItem;
