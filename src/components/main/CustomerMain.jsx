import React, { useEffect, useState } from "react";
import TodayInfo from "./TodayInfo";
import Trade from "./Trade";
import { useQueries } from "@tanstack/react-query";
import { authenticationGet } from '../../api/user/authApi';
import { useAuthenticationStore } from '../../stores/authentication';
import RecommandBroker from '../recommand/RecommandBroker';
import LikeBroker from './LikeBroker';
import CurrentOutgoing from './CurrentOutgoing';
import { useHeaderText } from "../../stores/headerText";
import { fetchCompanies, fetchTodayInfo, getMostOutgoingCompany, getRecentlyOutgoing } from '../../api/main/mainApi';
import { SyncLoader } from 'react-spinners';

const CustomerMain = () => {
	const {accessToken,refreshToken,setAccessToken, setRefreshToken, deleteCookie } = useAuthenticationStore();
	const { setHeaderText } = useHeaderText();
	useEffect(() => {
		setHeaderText("홈");
		return () => setHeaderText("메인");
	}, [setHeaderText]);
	
	const queries = useQueries({
    queries: [
      {
        queryKey: ['todayInfo'],
        queryFn: fetchTodayInfo,
      },
      {
        queryKey: ['companies'],
        queryFn: fetchCompanies,
      },
      {
        queryKey: ['recentlyOutgoing'],
        queryFn: getRecentlyOutgoing,
      },
			{
				queryKey: ['bestCompany'],
				queryFn: getMostOutgoingCompany,
			}
    ]
  });

	const isLoading = queries.some(query => query.isLoading);
  const isError = queries.some(query => query.isError);
  const error = queries.find(query => query.isError)?.error;

	if (isLoading) {
    return (
			<SyncLoader color="#000" />
		)
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const todayInfo = queries[0].data;
  const company = queries[1].data;

	return (
		<div className="flex flex-col items-center w-full">
			<div className="p-2 rounded-[20px] w-full h-1/5">
				<TodayInfo todayInfo={todayInfo}/>
			</div>
			<div className="p-2 rounded-[20px] w-full h-1/5">
				<Trade />
			</div>
			<div className="flex flex-col justify-center items-center rounded-[20px] w-full p-2 h-1/5">
				<p className='w-full font-bold mb-2 text-lg ml-2'>👍 추천 매장</p>
				<RecommandBroker/>
			</div>
			<div className='flex w-full p-2 gap-4 h-1/5'>
                <div className='flex flex-1'>
                    <CurrentOutgoing />
                </div>
                <div className='flex flex-1'>
                    <LikeBroker />
                </div>
            </div>
		</div>
	);
};

export default CustomerMain;
