import React from "react";
import { axiosInstance } from '../../api/common/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { url } from '../../constants/defaultUrl';

const fetchTodayInfo = async () => {
  try {
    const response = await axiosInstance.get(`${url}/outgoings/customer/today`);
    if (response.status === 200) {

      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching today info:', error);
    return null;
  }
};

const TodayInfo = () => {
	const query = useQuery({
    queryKey: ['todayInfo'], 
    queryFn: fetchTodayInfo, 
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.error) return <div>Error: {query.error.message || 'Failed to fetch data'}</div>;

  const { pending = 0, ready = 0, complete = 0 } = query.data || {};

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
					<div className="self-center text-2xl">{pending}</div>
				</div>
				<div className="flex flex-col border-r border-white pr-2 gap-2">
					<div>{"출고 대기"}</div>
					<div className="self-center text-2xl">{ready}</div>
				</div>
				<div className="flex flex-col pr-2 gap-2">
					<div>{"출고 완료"}</div>
					<div className="self-center text-2xl">{complete}</div>
				</div>
			</div>
		</div>
	);
};

export default TodayInfo;