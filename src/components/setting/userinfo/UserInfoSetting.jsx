import React from "react";
import settingIcon from "../../../constants/setting/setting.image";
import UserInfoList from "./UserInfoList";

const UserInfoSetting = () => {
	return (
		<div className="flex flex-col items-center gap-9 pt-8">
			<div className="flex flex-col">
				<img
					src={settingIcon.userInfoImage}
					className=" w-[150px] h-[150px]  rounded-full"
					alt="프로필 이미지"
				/>
				<img
					className="w-[24px] text-black self-end"
					src={settingIcon.cameraBlackIcon}
					alt="camera-icon"
				/>
			</div>
			<div>
				<UserInfoList />
			</div>
		</div>
	);
};

export default UserInfoSetting;
