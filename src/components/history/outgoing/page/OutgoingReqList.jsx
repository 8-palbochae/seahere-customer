import React, { useState } from "react";
import OutgoingReqListComponent from "../itemcomponent/OutgoingReqListComponent";
import SearchInputFilter from "../../../common/SearchInputFilter";
import { getOutgoingReqListSlice } from "../../../../api/outgoing/outgoingApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import PeriodStart from "../../main/itemcomponent/PeriodStart";
import PeriodEnd from "../../main/itemcomponent/PeriodEnd";
import dayjs from "dayjs";

const getCurrentDate = () => {
	return dayjs().format("YYYY-MM-DD");
};

const OutgoingReqList = () => {
	const [startDate, setStartDate] = useState(getCurrentDate);
	const [endDate, setEndDate] = useState(getCurrentDate);
	const [search, setSearch] = useState("");
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery({
			queryKey: ["outgoingReqList", { startDate, endDate, search }],
			queryFn: ({ pageParam = 0 }) =>
				getOutgoingReqListSlice({
					startDate,
					endDate,
					search,
					page: pageParam,
				}),
			getNextPageParam: (lastPage) =>
				lastPage.hasNext ? lastPage.currentPage + 1 : undefined,
		});
	if (status === "loading") {
		return (
			<div>
				<div className="flex flex-col gap-5">
					<SearchInputFilter setSearch={setSearch} search={search} />
					<div className="flex items-center gap-2 justify-center">
						<PeriodStart
							setStartDate={setStartDate}
							startDate={startDate}
						/>
						<span>~</span>
						<PeriodEnd setEndDate={setEndDate} endDate={endDate} />
					</div>
					<div>잠시만 기다려 주세요</div>
				</div>
			</div>
		);
	}

	if (status === "error") {
		console.log("api 통신 문제");
	}
	return (
		<div>
			<div className="flex flex-col gap-5">
				<SearchInputFilter setSearch={setSearch} search={search} />
				<div className="flex items-center gap-2 justify-center">
					<PeriodStart
						setStartDate={setStartDate}
						startDate={startDate}
					/>
					<span>~</span>
					<PeriodEnd setEndDate={setEndDate} endDate={endDate} />
				</div>
				<OutgoingReqListComponent
					data={data}
					fetchNextPage={fetchNextPage}
					hasNextPage={hasNextPage}
					isFetchingNextPage={isFetchingNextPage}
				/>
			</div>
		</div>
	);
};

export default OutgoingReqList;
