import React from 'react';
import PropTypes from 'prop-types';
import BrokerItem from '../trade/broker/BrokerInfo';
import Company from './../../types/Company';

const RecommandBroker = () => {
    const company = {
        id:10000,
        companyName:"테스트 회사",
        address:{
            postCode:'1234',
            mainAddress : '부산광역시',
            subAddress:'자갈치 시장'
        }
    }
    return (
        <>
            <BrokerItem id={'100000'} company={company}/>
        </>
    );
};

RecommandBroker.propTypes = {};

export default RecommandBroker;