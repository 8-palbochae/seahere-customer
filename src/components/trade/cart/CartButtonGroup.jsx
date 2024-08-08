import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartButtonGroup = () => {
  const navigate = useNavigate();   

  const handleAddProduct = () => {
    // navigate(`/trades/broker/${company.id}`  , { state: { company } });
    navigate("/trades")
  }

  return (
    <div className='flex flex-col gap-2 border-t-2 mx-2 bg-white h-full'>
      <button className='w-full border border-black p-2 rounded-md font-bold' onClick={handleAddProduct}>+ 상품 추가</button>
      <button className='w-full border border-blue-600 bg-blue-600 text-white p-2 rounded-md font-bold'>도움 요청</button>
    </div>
  );
};

export default CartButtonGroup;
