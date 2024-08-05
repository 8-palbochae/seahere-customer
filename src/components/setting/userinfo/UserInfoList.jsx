import React from "react";
import UserInfoItem from "./UserInfoItem";
import UserInfoAddressItem from "./UserInfoAddressItem";
import UserInfoPasswordItem from "./UserInfoPasswordItem";

const UserInfoList = () => {
	return (
		<div className="flex flex-col gap-2">
			<UserInfoItem type={"직원명"} value={"홍길동"} />
			<UserInfoItem type={"이메일"} value={"iwantgohome@naver.com"} />
			<UserInfoPasswordItem type={"비밀번호 변경"} />
			<UserInfoItem type={"회사명"} value={"스파로스"} />
			<UserInfoItem type={"사업자번호"} value={"112-00-11122"} />
			<UserInfoAddressItem
				type={"사업자 주소"}
				address={"부산 해운대구 APEC로 17 센텀리더스마크"}
				address2={"4층"}
				postNumber={"48060"}
			/>
		</div>
	);
};

export default UserInfoList;
