import React from 'react';


const OutgoingListHeader = () => {
    return (
        <div className="relative w-full h-[41px]">
            <div className="w-full h-full bg-white border border-solid border-[#d9d9d9] flex ">
                <div className="flex-1 flex items-center justify-center font-normal text-black text-base leading-[normal] whitespace-nowrap">
                    요청자
                </div>
                <div className="flex-1 flex items-center justify-center font-normal text-black text-base leading-[normal] whitespace-nowrap">
                    제목
                </div>
                
                <div className="flex-1 flex items-center justify-center font-normal text-black text-base leading-[normal] whitespace-nowrap">
                    상태
                </div>
                
            </div>
        </div>
    );
};

export default OutgoingListHeader;
