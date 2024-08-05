import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import { inventoryIcon } from "../../constants/inventory/inventory.image";
import { getProductList } from "../../api/incoming/incomingApi";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ value }) => {
	let { data, isPending, isError, error } = useQuery({
		queryKey: ["productList"],
		queryFn: () => getProductList(value),
		enabled: value !== undefined && value !== null,
	});

	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isPending) {
			if (query.length > 0) {
				// Filter the data based on the query
				const filteredSuggestions = data.filter(({ productName }) =>
					productName.toLowerCase().includes(query.toLowerCase())
				);
				setSuggestions(filteredSuggestions);
			} else {
				setSuggestions([]);
			}
		}
	}, [query, data]);

	return (
		<div>
			<div className="flex h-11 bg-gray-100 justify-around items-center gap-3 m-2 rounded">
				<img
					className="w-8 object-cover ml-3 mr-2"
					src={inventoryIcon.searchIcon}
					alt=""
				/>
				<input
					className="w-4/5 h-8 p-2 bg-gray-200 rounded"
					type="text"
					placeholder="검색"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<img
					className="w-8 object-cover mr-3"
					src={inventoryIcon.scanIcon}
					alt=""
				/>
			</div>
			{suggestions.length > 0 && query && (
				<div className="bg-white border border-gray-300 rounded mt-1">
					{suggestions.map((suggestion, index) => (
						<div
							key={index}
							className="p-2 cursor-pointer hover:bg-gray-200"
							onClick={() => {
								// setQuery(suggestion);
								// setSuggestions([]);
								navigate("/incoming", {
									state: { selectedProduct: suggestion },
								});
							}}
						>
							{suggestion.productName}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchInput;
