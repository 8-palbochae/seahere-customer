import React, { useEffect } from "react";
import TodayInfo from "./TodayInfo";
import Trade from "./Trade";
import { authenticationGet } from '../../api/user/authApi';
import { useAuthenticationStore } from '../../stores/authentication';
import RecommandBroker from '../recommand/RecommandBroker';
import LikeBroker from './LikeBroker';
import CurrentOutgoing from './CurrentOutgoing';
import { useHeaderText } from "../../stores/headerText";

const CustomerMain = () => {
	const {accessToken,refreshToken,setAccessToken, setRefreshToken, deleteCookie } = useAuthenticationStore();
	
	const { setHeaderText } = useHeaderText();
	useEffect(() => {
		setHeaderText("홈");
		return () => setHeaderText("메인");
	}, [setHeaderText]);
	
	return (
		<div className="flex flex-col items-center w-full">
			<div className="p-2 rounded-[20px] w-full h-1/5">
				<TodayInfo />
			</div>
			<div className="p-2 rounded-[20px] w-full h-1/5">
				<Trade />
			</div>
			<div className="flex flex-col justify-center items-center rounded-[20px] w-full p-2 h-1/5">
				<p className='w-full font-bold mb-2 text-lg ml-2'>👍 추천 매장</p>
				<RecommandBroker />
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