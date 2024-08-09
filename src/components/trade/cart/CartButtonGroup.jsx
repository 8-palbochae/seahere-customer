import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutgoingModal from './OutgoingModal,';

const CartButtonGroup = () => {
  const navigate = useNavigate();   
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = () => {
    // navigate(`/trades/broker/${company.id}`  , { state: { company } });
    navigate("/trades")
  }

   const handleOpenModal = () => {
    setIsModalOpen(true);  // Show the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Hide the modal
  };

  return (
    <div className='flex flex-col gap-2 border-t-2 mx-2 bg-white h-full'>
      <button className='w-full border border-black p-2 rounded-md font-bold' onClick={handleAddProduct}>+ 상품 추가</button>
      <button className='w-full border border-blue-600 bg-blue-600 text-white p-2 rounded-md font-bold' onClick={handleOpenModal}>도움 요청</button>
      <OutgoingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CartButtonGroup;
