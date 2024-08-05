import React, { useState, useEffect } from "react";
import { inventoryIcon } from "../../../constants/inventory/inventory.image";
import { getProductList } from "../../../api/incoming/incomingApi";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const InventorySearchInput = ({ onSearchChange }) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const { data, isPending } = useQuery({
		queryKey: ["productList"],
		queryFn: () => getProductList(query),
		enabled: query !== "",
	});

	useEffect(() => {
		if (!isPending && data) {
			const filteredSuggestions = data.filter(({ productName }) =>
				productName.toLowerCase().includes(query.toLowerCase())
			);
			setSuggestions(filteredSuggestions);
		}
	}, [query, data, isPending]);

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setQuery(newValue);
		onSearchChange(newValue);
	};

	return (
		<div className="w-full flex justify-center mt-4 sticky top-0 bg-white">
			<div className="w-full max-w-4xl mx-auto bg-white">
				<div className="flex h-11 bg-gray-100 justify-between items-center gap-3 m-2 rounded w-full">
					<img
						className="w-8 object-cover ml-3 mr-2"
						src={inventoryIcon.searchIcon}
						alt="Search Icon"
					/>
					<input
						className="flex-grow h-8 p-2 bg-gray-200 rounded"
						type="text"
						placeholder="Search"
						value={query}
						onChange={handleInputChange}
					/>
					<img
						className="w-8 object-cover mr-3"
						src={inventoryIcon.scanIcon}
						alt="Scan Icon"
					/>
				</div>
				{suggestions.length > 0 && query && (
					<div className="absolute w-full bg-white border border-gray-300 rounded mt-1 z-10 max-h-60 overflow-y-auto">
						{suggestions.map((suggestion, index) => (
							<div
								key={index}
								className="p-2 cursor-pointer hover:bg-gray-200"
								onClick={() => {
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
		</div>
	);
};

export default InventorySearchInput;
