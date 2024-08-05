import React, { useState } from 'react';
import dayjs from 'dayjs';
import useDragHandler from '../../../../hooks/useDragHandler';
import '../../../inventory/styles/InventoryItem.css'
import InventoryItemDetails from '../../../inventory/InventoryItemDetails';
import OutgoingDelete from './OutgoingDelete';

const OutgoingListItem = () => {
    const [isSwiped, setIsSwiped] = useState(false);
    const [showOutgoingDelete, setShowOutgoingDelete] = useState(false);

    // 핸들러 함수들
    const handleSwipeLeft = () => {
        setIsSwiped(true);
    };

    const handleSwipeRight = () => {
        setIsSwiped(false);
    };

    const handleOutgoingDeleteClose = () => {
        setShowOutgoingDelete(false);
    };

    const { itemRef, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown } = useDragHandler(
        handleSwipeLeft,
        handleSwipeRight
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };
    const date = '2024-07-10';

    return (
        <div className="relative w-full flex flex-col">
            <div className="text-gray-700 text-base mb-1 border-b border-gray-300 pb-1">
                {date}
            </div>
            <div className="relative w-full flex ">
            
                <div
                    ref={itemRef}
                    className={`flex w-full h-[98px] bg-white rounded-[20px] shadow-lg border-solid items-center px-4 transition-transform duration-300 ease-in-out ${isSwiped ? 'translate-x-[-100px]' : 'translate-x-0'
                        }`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onClick={handleToggle}
                >
                    
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[69px] text-center font-normal text-black truncate  text-base leading-[normal]">
                            스파로스
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[90px] text-center font-normal text-black truncate  text-base leading-[normal]">
                            넙치 외 3건
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[70px] text-center font-normal text-black truncate  text-base leading-[normal]">
                            출고 대기
                        </div>
                    </div>
                </div>
                {isSwiped && (
                <button
                    className="absolute right-0 h-[98px] bg-blue-600 text-white py-2 px-4 rounded-r-lg shadow-lg flex items-center justify-center transition-width duration-300 ease-in-out block"
                    style={{ width: '100px' }}
                    onClick={() => setShowOutgoingDelete(true)}
                >
                    출고 완료
                </button>
            )}
             {showOutgoingDelete && <OutgoingDelete onClose={handleOutgoingDeleteClose} />}
             </div>
            <div
                className={`transition-height overflow-hidden flex flex-col justify-center items-center ${isExpanded ? 'details-open' : 'details-closed'}`}
            >
                {isExpanded && (
                    <>
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                    </>
                )}
            </div>
        </div>
    );
};

export default OutgoingListItem;
