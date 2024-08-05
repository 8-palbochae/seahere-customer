import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BrokerInfo from './BrokerInfo'; // BrokerInfo를 CompanyInfo로 이름 변경할 수도 있습니다.
import { url } from '../../../constants/defaultUrl';

const BrokerList = ({ page = 1, size = 10 }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${url}/companies`, {
                    params: { page, size ,searchWord:"자갈치"}
                });
                console.log(response.data);
                setCompanies(response.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };

        fetchCompanies();
    }, [page, size]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='flex flex-col items-center my-2 w-11/12'>
            {companies.map(company => (
                <BrokerInfo key={company.id} company={company}/>
            ))}
        </div>
    );
};

BrokerList.propTypes = {
    page: PropTypes.number,
    size: PropTypes.number
};

export default BrokerList;
