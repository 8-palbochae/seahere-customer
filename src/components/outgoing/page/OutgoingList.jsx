import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import OutgoingListItem from '../items/OutgoingListItem';
import OutgoingSearch from '../OutgoingSearch';
import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../api/common/axiosInstance';
import { url } from '../../../constants/defaultUrl';

// API 호출 함수
const fetchOutgoing = async ({ pageParam = 1, size = 10, searchWord = "" }) => {
    try {
        const response = await axiosInstance.get(`${url}/outgoings/customer`, {
            params: { page: pageParam, size, searchWord },
        });
        console.log('Fetched data:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error('Error fetching data');
    }
};

// OutgoingList 컴포넌트
const OutgoingList = () => {
    const [searchWord, setSearchWord] = useState('');
    const loadMoreRef = useRef(null);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['outgoingList', 10, searchWord],
        queryFn: ({ pageParam = 1 }) => fetchOutgoing({ pageParam, size: 10, searchWord }),
        getNextPageParam: (lastPage, pages) => {
            return lastPage.length === 10 ? pages.length + 1 : undefined;
        },
    });

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
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
    }, [hasNextPage, isFetchingNextPage]);

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Error loading data.</p>;

    const outgoings = data?.pages.flatMap(page => page) || [];

    return (
        <div className='w-full'>
            <OutgoingSearch searchWord={searchWord} setSearchWord={setSearchWord} />
            {outgoings.map(outgoing => (
                <OutgoingListItem key={outgoing.outgoingId} outgoing={outgoing} />
            ))}
            {/* 로드 모어 감지용 요소 */}
            <div ref={loadMoreRef} className="h-10 flex justify-center items-center">
                {isFetchingNextPage && <p>Loading more...</p>}
            </div>
        </div>
    );
};

OutgoingList.propTypes = {};

export default OutgoingList;
