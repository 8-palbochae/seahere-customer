import React, { useEffect, useState } from "react";
import axios from 'axios';
import dayjs from 'dayjs';
import { url } from '../../constants/defaultUrl';

// 데이터 패칭 함수
const fetchTodayInfo = async () => {
  try {
    const response = await axios.get(`${url}/outgoings/customer/today`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const TodayInfo = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 컴포넌트 마운트 시 데이터 패칭
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchTodayInfo();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // 빈 배열을 주면 컴포넌트가 마운트될 때만 호출됨

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'Failed to fetch data'}</div>;

  const { pending = 0, ready = 0, complete = 0 } = data || {};

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
