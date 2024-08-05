import React, { useState, useEffect } from 'react';

  const IncomingModifiedModal = ({ isOpen, onClose, onSave, initialAmount }) => {
      const [amount, setAmount] = useState(0);

      useEffect(() => {
          setAmount(initialAmount);
      }, [initialAmount, isOpen]);

      const handleSave = () => {
        const numericAmount = parseFloat(amount); 
        if (!isNaN(numericAmount) && numericAmount >= 0) {
            onSave(numericAmount); 
            setAmount(''); 
            onClose(); 
        } else {
            alert('올바른 금액을 입력해주세요.'); // Show an error message
        }
      };

      if (!isOpen) return null;

      return (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">입고 금액 수정</h2>
                  <div className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-lg flex justify-between items-center">
                      <div className="text-md text-gray-600 font-semibold">변경 전 Kg 당 금액</div>
                      <div className="text-xl font-bold text-gray-900">{initialAmount} 원</div>
                  </div>
                  <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg flex items-center">
                      <label htmlFor="new-amount" className="text-md font-semibold text-gray-600 w-1/3">변경 후 금액</label>
                      <div className="flex items-center w-2/3">
                          <input
                              id="new-amount"
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="border border-gray-300 rounded-lg p-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-right"
                              placeholder="새 금액을 입력하세요"
                          />
                          <span className="text-xl font-bold text-gray-900 ml-2">원</span>
                      </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                      <button
                          onClick={onClose}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-150 ease-in-out"
                      >
                          취소
                      </button>
                      <button
                          onClick={handleSave}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out"
                      >
                          저장
                      </button>
                  </div>
              </div>
          </div>
      );
  };

  export default IncomingModifiedModal;
