import React from 'react';
import IncomingListItem from './IncomingListItem';

const IncomingListComponent = () => {
    return (
        <div className="space-y-1"> {/*ListItem 간의 gap*/}
            <IncomingListItem />
            <IncomingListItem />
            <IncomingListItem />
            <IncomingListItem />
        </div>
    );
};

export default IncomingListComponent;