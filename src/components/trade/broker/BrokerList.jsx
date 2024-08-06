import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BrokerInfo from './BrokerInfo'; // BrokerInfo를 CompanyInfo로 이름 변경할 수도 있습니다.
import { url } from '../../../constants/defaultUrl';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchCompanies = async ({ pageParam = 1, size = 10, searchWord = "" }) => {
  const response = await axios.get(`${url}/companies`, {
    params: { page: pageParam, size, searchWord },
  });
  console.log(response.data);
  return response.data;
};

const BrokerList = ({ size = 10 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const loadMoreRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['brokerList', size, currentSearchTerm],
    queryFn: ({ pageParam = 1 }) => fetchCompanies({ pageParam, size, searchWord: currentSearchTerm }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === size ? pages.length + 1 : undefined;
    },
  });

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

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
  }, [loadMoreRef.current, hasNextPage]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentSearchTerm(searchTerm);
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error loading data.</p>;

  const companies = data?.pages.flatMap(page => page) || [];

  return (
    <div className="flex flex-col items-center my-2 w-11/12">
      <form onSubmit={handleSearch} className="w-full flex justify-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search companies..."
          className="border p-2 rounded w-1/2"
        />
        <button type="submit" className="ml-2 p-2 border rounded bg-blue-500 text-white">
          Search
        </button>
      </form>
      {companies.map(company => (
        <BrokerInfo key={company.id} company={company} />
      ))}
      <div ref={loadMoreRef} className="h-10 flex justify-center items-center">
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
};

BrokerList.propTypes = {
  size: PropTypes.number,
};

export default BrokerList;
