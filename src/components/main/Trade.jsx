import React from "react";
import outgoingIcon from '../../assets/outgoing/outgoing-icon.svg'
import { useNavigate } from 'react-router-dom';

const Trade = () => {
	const navigate =useNavigate();

	return (
		<div className="flex flex-col items-center justify-between p-3 sbg-white border border-gray-200 rounded-lg shadow-md gap-2" onClick={() => navigate("/trades")}>
			<p className='font-bold text-xl w-full text-left px-2'>출고 요청</p>
			<div className='flex justify-between w-full p-2'>
				<div className="flex gap-2 items-center">
					<div className='w-8 h-8'>
						<img className='w-full h-full object-cover' src={outgoingIcon} alt="" />
					</div>
					<div className='text-lg'>출고 요청 하기</div>
					
				</div>
				<div className='flex items-center font-bold text-gray-600'>
					{'>'}
				</div>
			</div>
		</div>
	);
};

export default Trade;
