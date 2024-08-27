import React, { useEffect, useState } from 'react';
import BrokerCarousel from '../trade/broker/BrokerCarousel';
import { axiosInstance } from '../../api/common/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { url } from '../../constants/defaultUrl';

const fetchCompanies = async (pageParam = 1, size = 10) => {
    try {
        const response = await axiosInstance.get(`${url}/companies/customer/follow`, {
            params: { page: pageParam, size, searchWord : "" },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};

const LikeBroker = () => {
    const [companies, setCompanies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loadMore = async () => {
        if (loading || !hasNextPage) return;

        setLoading(true);

        try {
            const newCompanies = await fetchCompanies(page, 10);
            setCompanies((prev) => [...prev, ...newCompanies]);
            setPage((prev) => prev + 1);
            setHasNextPage(newCompanies.length === 10); 
        } catch (error) {
            console.error('Failed to load more companies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMore();
    }, []);


    return (
        <div className='flex flex-col w-full h-full'>
            <p className='font-bold text-lg mb-2 ml-1'>💕 관심업체 관리</p>
            <div className='bg-white border border-gray-200 rounded-lg shadow-md p-2 w-full flex-1 overflow-hidden h-28'>
                <BrokerCarousel companies={companies} />
            </div>
            {/* {loading && <div>Loading...</div>}
            {hasNextPage && !loading && (
                <button onClick={loadMore} className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Load More
                </button>
            )} */}
        </div>
    );
};

export default LikeBroker;
