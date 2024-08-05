import React from 'react';
import IncomingListTitle from '../itemcomponent/IncomingListTitle';
import IncomingListComponent from '../itemcomponent/IncomingListComponent';

const IncomingList = () => {
    return (
        <div>
        <div className="mt-2">
            <IncomingListTitle />
        </div>
        <div className="mt-1">
            <IncomingListComponent />
        </div>
        </div>
    );
};

export default IncomingList;