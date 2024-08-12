import React from 'react';
import { Outlet } from 'react-router-dom';

const Outgoing = () => {
    return (
        <div className='flex flex-col items-center'>
            <Outlet/>
        </div>
    );
};

Outgoing.propTypes = {};

export default Outgoing;