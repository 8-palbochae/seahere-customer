import React from "react";
import InventoryItem from "./InventoryItem";

const InventoryList = () => {
	return (
		<div className="flex flex-col gap-3 p-2">
			<InventoryItem />
			<InventoryItem />
			<InventoryItem />
			<InventoryItem />
			<InventoryItem />
			<InventoryItem />
			<InventoryItem />
		</div>
	);
};

export default InventoryList;
