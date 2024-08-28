import React, { useState } from 'react';
import useCartStore from '../../../stores/cart';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../constants/defaultUrl';
import { axiosInstance } from '../../../api/common/axiosInstance';

const OutgoingModal = ({ isOpen, onClose }) => {
  const navigate =useNavigate();
  const [requestCompleted, setRequestCompleted] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [isClick, setIsClick] = useState(true);
  const { cartItems, company, clearCart } = useCartStore((state) => ({
        cartItems: state.cartItems,
        company : state.company,
        clearCart : state.clearCart,
  }));

  if (!isOpen) return null;
  
  const handleCheckboxChange = () => {
    setAgreementChecked(!agreementChecked);
  };

  const toRequest = (details) => {
    return details.map(detail => {
        return {
            inventoryId: detail.id, 
            quantity: detail.quantity, 
            price: detail.price
        };
    });
};

const sendOutgoingRequest = async (outgoingRequests) => {
    try {
        const response = await axiosInstance.post(`${url}/outgoings`, outgoingRequests, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status === 200){
          setIsClick(true);
          clearCart();
          navigate('/');
          alert("출고 요청 성공");
        }

    } catch (error) {
      throw new error();
    }
};

  const handleClickOugoing = () => {
    const outgoing = {
      companyId : company,
      partialOutgoing : agreementChecked,
      tradeType:"b2c",
      details : toRequest(cartItems),
    }
    setIsClick(false);
    sendOutgoingRequest(outgoing);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full bg-black bg-opacity-50 p-5">
      <div className="bg-white p-4 rounded-md">
        {requestCompleted ? (
          <div className="flex flex-col text-center w-full p-3 gap-5">
            <div className="text-lg font-bold mb-">✅ 출고 요청이 완료되었습니다!</div>
            <button className="p-2 bg-blue-600 text-white rounded-md w-full" onClick={onClose}>
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="text-xl font-bold my-4">✅ 출고 요청 확인</div>
            <div className="mb-4 flex items-center gap-2">
              <input 
                type="checkbox" 
                id="agreement" 
                checked={agreementChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement" className="block font-semibold">
                재고가 부족 시 출고 가능 상품만 출고에 동의
              </label>
            </div>
            <p className='text-gray-500 w-full text-left my-3'>
              동의하지 않으면 재고가 하나라도 부족한 경우 출고 요청이 거절될 수 있습니다.
            </p>
            <div className="flex justify-end gap-2 w-full my-3">
              <button className="p-2 bg-gray-200 rounded-md w-full" onClick={onClose}>취소</button>
              <button className="p-2 bg-blue-600 text-white rounded-md w-full" onClick={handleClickOugoing}>
                요청
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OutgoingModal;
