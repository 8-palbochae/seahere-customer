import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInventorySlide from '../../hooks/inventory/useInventorySlide';
import { inventoryIcon } from '../../constants/inventory/inventory.image';
import InventoryEditModal from './modal/InventoryEditModal';
// import InventoryDeleteModal from './modal/InventoryDeleteModal';

const InventoryItemDetails = ({ detailData }) => {
    const { isSlid, handleTouchStart, handleTouchMove, handleMouseDown, handleMouseMove } = useInventorySlide();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const { inventoryId, companyId, name, category, quantity, incomingDate, country, naturalStatus } = detailData;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // const openDeleteConfirm = () => setIsDeleteConfirmOpen(true);
    // const closeDeleteConfirm = () => setIsDeleteConfirmOpen(false);

    // const handleDelete = () => {
    //     console.log("Item deleted");
    //     closeDeleteConfirm();
    // };

    return (
        <div
            className="relative w-full p-3 border-t border-gray-200 overflow-hidden cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            <div className="flex">
                <div
                    className={`flex flex-col justify-center transition-transform duration-300 ${isSlid ? 'translate-x-[-140px]' : 'translate-x-0'}`}
                    style={{ flex: '1 0 auto', width: 'calc(100% - 140px)' }}
                >
                    <div className="flex justify-around items-center mb-2">
                        <span className="w-1/6 text-sm font-medium truncate text-center">{country}</span>
                        <span className="w-1/6 text-sm truncate text-center">{naturalStatus}</span>
                        <span className="w-1/6 text-sm font-semibold truncate text-center text-blue-600">{quantity} Kg</span>
                        <span className="w-1/6 text-sm truncate text-center">{incomingDate}</span>
                    </div>
                </div>

                <div
                    className={`absolute top-0 right-0 h-full flex flex-row bg-white border-l border-gray-200 transition-transform duration-300 ${isSlid ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ width: '100px' }}
                >
                    <button className="flex-1 flex items-center justify-center p-0 bg-gray-400" onClick={openModal}>
                        <img src={inventoryIcon.editIcon} className='w-3/5 h-3/5 object-contain' alt="Edit" />
                    </button>
                    {/* 
                    <button className="flex-1 flex items-center justify-center p-0 bg-red-500" onClick={openDeleteConfirm}>
                        <img src={inventoryIcon.deleteIcon} className='w-3/5 h-3/5 object-contain' alt="Delete" />
                    </button>
                    */}
                </div>
            </div>
            <InventoryEditModal name={name} quantity={quantity}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            {/* <InventoryDeleteModal
                isOpen={isDeleteConfirmOpen}
                onClose={closeDeleteConfirm}
                onConfirm={handleDelete}
            /> */}
        </div>
    );
};

InventoryItemDetails.propTypes = {
    country: PropTypes.string.isRequired,
    naturalStatus: PropTypes.string.isRequired,
    detailData: PropTypes.shape({
        inventoryId: PropTypes.number.isRequired,
        inventoryQuantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
};


export default InventoryItemDetails;
