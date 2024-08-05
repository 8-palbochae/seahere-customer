import React from 'react';
import OutgoingListItem from './OutgoingListItem';

const OutgoingListComponent = () => {
    const items = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        // <div className="w-full px-4">
        <div className="w-full flex flex-col items-center px-4 gap-2">
            {items.map(item => (
                <OutgoingListItem key={item} /> // 각 InventoryItem에 고유한 key를 추가합니다
            ))}
        </div>
    );
};

export default OutgoingListComponent;