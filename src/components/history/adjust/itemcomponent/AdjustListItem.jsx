import React from 'react';
import nupchiIcon from '../../../../assets/history/nupchi-icon.png';

const IncomingListItem = () => {
    // 날짜 데이터 예시
    const date = '2024-07-10';
    return (
        <div className="w-full px-2 my-2">
            <div className="text-gray-700 text-base mb-1 border-b border-gray-300 pb-1">
                {date}
            </div>
            <div className="flex w-full bg-white rounded-lg shadow-xl px-3 py-2 items-center justify-between">
                <div className="flex flex-col items-center mr-3 w-1/4 p-2">
                    <div className="w-20 h-20 mb-1">  
                        <img className="w-full h-full object-cover" alt="Image" src={nupchiIcon} />
                    </div>
                    <div className="text-center text-black text-base font-bold truncate w-full">
                        넙치
                    </div>
                </div>
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base mr-8">
                        활어
                    </div>
                </div>
                <div className="text-center flex-1 text-blue-600 text-base font-bold">
                    <span className='text-black font-normal mr-10'> 10 &rarr; 5</span>
                </div>
                <div className="flex justify-center mt-2">
                <span className="text-black font-normal inline-block text-center mr-5">
                    1500<br />↓<br />2000
                </span>
            </div>
            </div>
        </div>
    );
};

export default IncomingListItem;