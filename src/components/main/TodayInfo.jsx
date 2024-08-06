import React from "react";

const TodayInfo = () => {
	return (
		<div className="flex flex-col items-center w-full gap-2 p-3 rounded-[20px] bg-blue-600">
			<div className="flex self-start gap-2 items-center">
				<div className="text-white font-bold text-2xl">{"오늘"}</div>
				<div className="text-white">{"2024-07-23"}</div>
			</div>
			<div
				className="grid gap-2 w-full text-white p-2"
				style={{
					gridTemplateColumns: "1fr 1fr 1fr",
				}}
			>
				<div className="flex flex-col border-r border-white pr-2 gap-2">
					<div>{"출고 요청"}</div>
					<div className="self-center text-2xl">{"0"}</div>
				</div>
				<div className="flex flex-col border-r border-white pr-2 gap-2">
					<div>{"출고 대기"}</div>
					<div className="self-center text-2xl">{"0"}</div>
				</div>
				<div className="flex flex-col pr-2 gap-2">
					<div>{"출고 완료"}</div>
					<div className="self-center text-2xl">{"0"}</div>
				</div>
			</div>
		</div>
	);
};

export default TodayInfo;
