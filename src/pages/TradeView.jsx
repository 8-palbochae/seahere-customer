import React from 'react';
import { Outlet } from 'react-router-dom';

const TradeView = () => {
    return (
        <div className='flex flex-col items-center'>
            <Outlet/>
        </div>
    );
};

TradeView.propTypes = {};

export default TradeView;