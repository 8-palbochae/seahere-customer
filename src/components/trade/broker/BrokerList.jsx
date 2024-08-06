import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BrokerInfo from './BrokerInfo'; // BrokerInfo를 CompanyInfo로 이름 변경할 수도 있습니다.
import { url } from '../../../constants/defaultUrl';

const BrokerList = ({ size = 5 }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const loadMoreRef = useRef(null);

    const fetchCompanies = async (page) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${url}/companies`, {
                params: { page, size, searchWord: "" }
            });
            setCompanies(prev => [...prev, ...response.data]);
            setHasNextPage(response.data.length === size); // Assuming the API returns `size` number of items if there are more items available
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCompanies(page);
    }, [page]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && hasNextPage) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [loadMoreRef.current, hasNextPage]);

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='flex flex-col items-center my-2 w-11/12'>
            {companies.map(company => (
                <BrokerInfo key={company.id} company={company} />
            ))}
            <div ref={loadMoreRef} className="h-10 flex justify-center items-center">
                {loading && <p>Loading more...</p>}
            </div>
        </div>
    );
};

BrokerList.propTypes = {
    size: PropTypes.number
};

export default BrokerList;
