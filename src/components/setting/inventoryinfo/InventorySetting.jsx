import React from "react";
import SearchInput from "../../common/SearchInput";
import ListHeader from "./ListHeader";
import InventoryList from "./InventoryList";

const InventorySetting = () => {
	return (
		<div>
			<SearchInput />
			<ListHeader />
			<InventoryList />
		</div>
	);
};

export default InventorySetting;
