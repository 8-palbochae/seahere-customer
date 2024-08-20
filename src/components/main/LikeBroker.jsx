import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import BrokerCarousel from '../trade/broker/BrokerCarousel';
import { axiosInstance } from '../../api/common/axiosInstance';
import { useNavigate } from 'react-router-dom';

const fetchCompanies = async ({ pageParam = 1, size = 10, searchWord = "" }) => {
    try {
        const response = await axiosInstance.get(`/companies/c/follow`, {
            params: { page: pageParam, size, searchWord },
        });
        return response.data;
    } catch (error) {
        console.error('업체 정보를 불러오는 중 오류가 발생했습니다:', error);
        throw error;
    }
};

const LikeBroker = () => {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['followList'],
        queryFn: ({ pageParam = 1 }) =>
            fetchCompanies({ pageParam, size: 10 }),
        getNextPageParam: (lastPage, pages) =>
            lastPage.length === 10 ? pages.length + 1 : undefined,
    });

    useEffect(() => {
        if (data) {
            const allCompanies = data.pages.flatMap((page) => page);
            setCompanies(allCompanies);
        }
    }, [data]);


    return (
        <div className='flex flex-col w-full h-full'>
            <p className='font-bold text-lg mb-2 ml-1'>💕 관심업체 관리</p>
            <div className='bg-white border border-gray-200 rounded-lg shadow-md p-2 w-full flex-1 overflow-hidden h-28'>
                <BrokerCarousel companies={companies} />
            </div>

        </div>
    );
};

export default LikeBroker;
