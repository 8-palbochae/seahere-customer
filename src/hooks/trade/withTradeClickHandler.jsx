import React from 'react';

const withTradeClickHandler = (WrappedComponent, handleClick) => {
    return (props) => (
        <div className='w-full' onClick={() => handleClick(props.item)}>
            <WrappedComponent {...props} />
        </div>
    )
};

export default withTradeClickHandler;
