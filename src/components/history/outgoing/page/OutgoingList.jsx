import React from 'react';
import NoQRSearchInput from '../../../common/NoQRSearchInput';
import OutgoingListHeader from '../itemcomponent/OutgoingListHeader';
import OutgoingListComponent from '../itemcomponent/OutgoingListComponent';
import SearchInputFilter from '../../../common/SearchInputFilter'
const OutgoingList = () => {
    return (
        <div>
            <div>
                <SearchInputFilter />
                <OutgoingListComponent />
            </div>
        </div>
    );
};

export default OutgoingList;