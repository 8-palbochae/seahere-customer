import React from "react";
import SearchInput from "../../common/SearchInput";

const IncomingSearch = ({ type }) => {
	return (
		<div className="flex flex-col rounded-[10px] shadow-lg w-full p-3">
			<div className="flex gap-2 items-center">
				<div className=" border-r border-gray-300 pr-1">
					들어왔습니데이~
				</div>
				<div>입고</div>
			</div>
			<SearchInput value="incoming" />
		</div>
	);
};

export default IncomingSearch;
