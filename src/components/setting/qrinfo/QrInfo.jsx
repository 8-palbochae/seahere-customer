import React from "react";
import SearchInputFilter from "../../common/SearchInputFilter";
import QrList from "./QrList";

const QrInfo = () => {
	return (
		<>
			<div>
				<SearchInputFilter />
			</div>
			<div>
				<QrList />
			</div>
		</>
	);
};

export default QrInfo;
