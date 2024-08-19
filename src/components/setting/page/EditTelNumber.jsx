import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTelNumber = () => {
    const [telNumber, setTelNumber] = useState('');
    const [formattedTelNumber, setFormattedTelNumber] = useState('');

    const formatTelNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        let formattedNumber = '';
        if (cleanedValue.length <= 3) {
            formattedNumber = cleanedValue;
        } else if (cleanedValue.length <= 7) {
            formattedNumber = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3)}`;
        } else {
            formattedNumber = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 7)}-${cleanedValue.slice(7, 11)}`;
        }

        return formattedNumber;
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatTelNumber(inputValue);
        setTelNumber(formattedValue);
    };

    const isButtonDisabled = telNumber.replace(/-/g, '').length !== 11;

    return (
        <div className='flex flex-col mt-3 p-2 h-full'>
            <div className='font-bold text-xl'>
                새로운 휴대폰 번호를 입력해주세요
            </div>
            <div className='mt-3'>   
                <input
                    className="w-full h-12 p-2 bg-gray-100 rounded-md"
                    type="text"
                    placeholder="010-1234-1234"
                    value={telNumber}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div className='fixed bottom-20 left-4 w-full'> 
                <button
                    className={`w-11/12 font-bold h-12 rounded-md ${isButtonDisabled ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-600 text-white'}`}
                    disabled={isButtonDisabled}
                >
                    인증 번호 받기
                </button>
            </div>
        </div>
    );
};

EditTelNumber.propTypes = {};

export default EditTelNumber;
