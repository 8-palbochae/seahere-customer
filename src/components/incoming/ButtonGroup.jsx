import React, { useState } from 'react';
import MessageModal from './MessageModal';

const ButtonGroup = ({ quantity, incomingPrice, onSubmit }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleAddClick = () => {
        let errorMessage = '';

        if (!quantity && !incomingPrice) {
            errorMessage = '입고량과 입고 금액을 입력해주세요';
            setModalTitle('입력 확인');
        } else if (!quantity) {
            errorMessage = '입고량을 입력해주세요';
            setModalTitle('입력 확인');
        } else if (!incomingPrice) {
            errorMessage = '입고 금액을 입력해주세요';
            setModalTitle('입력 확인');
        }

        if (errorMessage) {
            setModalMessage(errorMessage);
            setShowModal(true);
        } else {
            setModalTitle('입고 등록 완료');
            setModalMessage('입고 등록이 완료되었습니다.');
            setShowModal(true);
        }
    };

    // const handleModalClose = async () => {
    //     setShowModal(false);
    //     await onSubmit();
    // };

    const handleModalClose = async () => {
        setShowModal(false);
        if (modalTitle === '입고 등록 완료') {
            await onSubmit();
        }
    };

    return (
        <div className='mt-5 flex flex-row justify-around items-center mb-6'>
            <div className='w-11/12 flex flex-row gap-5'>
                <button className='w-full bg-gray-200 text-black font-bold py-2 px-4 rounded-lg'>취소</button>
                <button
                    className='w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg  focus:ring-opacity-50'
                    onClick={handleAddClick}
                >
                    추가
                </button>
            </div>
            {showModal && (
                <MessageModal
                    onClose={handleModalClose}
                    title={modalTitle}
                    message={modalMessage}
                />
            )}
        </div>
    );
};

export default ButtonGroup;
