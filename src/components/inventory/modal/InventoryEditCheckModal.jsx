import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryEditCheckModal = ({ onClose, currentQuantity, afterQuantity, currentPrice, afterPrice }) => {
    const navigate = useNavigate();

    const handleConfirmClick = () => {
        navigate(0); // 현재 페이지를 새로고침
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={onClose}></div>
            <div className="relative w-[370px] bg-white rounded-[10px] shadow-lg p-6 z-20">
                <div className="text-center text-black text-lg font-medium mb-4">
                    재고 수정
                </div>
                <div className="text-center mb-4 text-black">
                    <div className="flex justify-between">
                        <span>현재 재고량:</span>
                        <span className="ml-2">{currentQuantity}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>변경 재고량:</span>
                        <span className="ml-2">{afterQuantity}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>현재 가격:</span>
                        <span className="ml-2">{currentPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>변경 가격:</span>
                        <span className="ml-2">{afterPrice}</span>
                    </div>
                </div>
                <p className="text-center mb-4 text-black">
                    정말 수정하시겠습니까?
                </p>
                <div className="w-full flex justify-around">
                    <button
                        className="w-[100px] h-8 bg-blue-600 rounded-[10px] text-white text-center font-medium"
                        onClick={handleConfirmClick}
                    >
                        확인
                    </button>
                    <button
                        className="w-[100px] h-8 bg-gray-600 rounded-[10px] text-white text-center font-medium"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryEditCheckModal;
