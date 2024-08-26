import React from "react";
import { axiosInstance } from '../../api/common/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { url } from '../../constants/defaultUrl';

const TodayInfo = ({todayInfo}) => {
  const { pending = 0, ready = 0, complete = 0 } = todayInfo || {};

	return (
		<div className="flex flex-col items-center w-full gap-2 p-3 rounded-[20px] bg-blue-600">
			<div className="flex self-start gap-2 items-center">
				<div className="text-white font-bold text-2xl">{"오늘"}</div>
				<div className="text-white">{dayjs().format('YYYY-MM-DD')}</div>
			</div>
			<div
				className="grid gap-2 w-full text-white p-2"
				style={{
					gridTemplateColumns: "1fr 1fr 1fr",
				}}
			>
				<div className="flex flex-col border-r border-white pr-2 gap-2">
					<div>{"출고 요청"}</div>
					<div className="self-center text-2xl">{todayInfo.pending}</div>
				</div>
				<div className="flex flex-col border-r border-white pr-2 gap-2">
					<div>{"출고 대기"}</div>
					<div className="self-center text-2xl">{todayInfo.ready}</div>
				</div>
				<div className="flex flex-col pr-2 gap-2">
					<div>{"출고 완료"}</div>
					<div className="self-center text-2xl">{todayInfo.complete}</div>
				</div>
			</div>
		</div>
	);
};

export default TodayInfo;
