import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import BrokerInfo from "./BrokerInfo";
import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../api/common/axiosInstance";
import { url } from '../../../constants/defaultUrl';

const fetchCompanies = async ({ pageParam = 1, size = 10, searchWord = "" }) => {
	const response = await axiosInstance.get(`${url}/companies/c`, {
		params: { page: pageParam, size, searchWord },
	});
	return response.data;
};

const BrokerList = ({ searchQuery = "", size = 10 }) => {
	const [currentSearchTerm, setCurrentSearchTerm] = useState(searchQuery);
	const loadMoreRef = useRef(null);

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery({
			queryKey: ["brokerList", size, currentSearchTerm],
			queryFn: ({ pageParam = 1 }) =>
				fetchCompanies({
					pageParam,
					size,
					searchWord: currentSearchTerm,
				}),
			getNextPageParam: (lastPage, pages) => {
				return lastPage.length === size ? pages.length + 1 : undefined;
			},
		});

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

	const handleObserver = (entries) => {
		const target = entries[0];
		if (target.isIntersecting && hasNextPage) {
			fetchNextPage();
		}
	};

	useEffect(() => {
		setCurrentSearchTerm(searchQuery);
	}, [searchQuery]);

	if (status === "loading") return <p>Loading...</p>;
	if (status === "error") return <p>Error loading data.</p>;

	const companies = data?.pages.flatMap((page) => page) || [];

	return (
		<div className="flex flex-col items-center my-2 w-11/12">
			{companies.map((company) => (
				<BrokerInfo key={company.id} company={{ ...company, isFollowed: company.followed !== undefined ? company.followed : false }} />
			))}
			<div
				ref={loadMoreRef}
				className="h-10 flex justify-center items-center"
			>
				{isFetchingNextPage && <p>Loading more...</p>}
			</div>
		</div>
	);
};

BrokerList.propTypes = {
	searchQuery: PropTypes.string.isRequired,
	size: PropTypes.number,
};

export default BrokerList;
