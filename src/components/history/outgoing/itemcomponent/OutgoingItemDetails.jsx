import React from 'react';

const OutgoingItemDetails = () => {
    return (
        <div className="flex flex-col justify-center w-11/12 p-3 border-t border-gray-200">
            <div className="flex justify-around items-center mb-2">
                <span className="w-1/6 text-sm font-medium truncate text-center">활어</span>
                <span className="w-1/6 text-sm truncate text-center">국산</span>
                <span className="w-1/6 text-sm font-semibold truncate text-center">{"100->20"}</span>
                <span className="w-2/6 text-sm truncate overflow-hidden text-ellipsis text-center" title="10000000000000000원">
                    1000000000
                </span>
                <span className="w-1/6 text-xs truncate text-red-500 border-2 rounded-full items-center text-center p-1">{"+3일"}</span>
            </div>
        </div>
    );
};

export default OutgoingItemDetails;
