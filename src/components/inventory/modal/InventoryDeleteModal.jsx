// src/components/InventoryDeleteConfirmModal.js
import React from 'react';

const InventoryDeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-semibold mb-4">정말 삭제 하시겠습니까?</h2>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={onConfirm}
                    >
                        삭제
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDeleteModal;
