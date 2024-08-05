import React from 'react';
import AdjustListTitle from '../itemcomponent/AdjustListTitle';
import AdjustListComponent from '../itemcomponent/AdjustListComponent';

const AdjustList = () => {
    return (
        <div>
        <div className="mt-2">
            <AdjustListTitle />
        </div>
        <div className="mt-1">
            <AdjustListComponent />
        </div>
        </div>
    );
};

export default AdjustList;