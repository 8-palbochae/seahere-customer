// src/components/Modal.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CartModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-2 rounded-md shadow-lg max-w-5xl mx-auto w-11/12'>
                <div className='flex flex-col h-full w-full'>
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <div className='w-full h-full flex items-center justify-around px-4 mb-4'>
                        <button className='border-1 border-blue-600 bg-blue-100 rounded-full w-1/5 h-full font-semibold'>-</button>
                        <input 
                            className='text-center text-black w-1/5 border-b-2 border-transparent focus:border-blue-500 outline-none transition-colors duration-200' 
                            type="text" 
                            placeholder='0'
                        />
                        <button className='border-1 border-blue-600 bg-blue-100 rounded-full w-1/5 h-full font-semibold'>+</button>
                    </div>
                    <div className='w-full justify-center text-center text-lg'>
                        <span className='text-gray-500'>100</span> <span className='text-black font-bold'>120</span>
                    </div>
                    <div className='flex justify-center gap-3 mt-4'>
                        <button 
                            onClick={onClose} 
                            className='w-full bg-gray-400 text-white px-4 py-2 rounded'
                        >
                            취소
                        </button>
                        <button 
                            onClick={onClose} 
                            className='w-full bg-blue-600 text-white px-4 py-2 rounded'
                        >
                            담기
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

CartModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default CartModal;
