import React from "react";
import UserInfo from "./UserInfo";
import SettingList from "./SettingList";

const MainSetting = () => {
	return (
		<div className="flex  justify-center pt-8">
			<div className="flex flex-col justify-center items-center gap-5 w-3/4">
				<div className="flex w-full">
					<UserInfo />
				</div>
				<div className="flex w-full">
					<SettingList />
				</div>
			</div>
		</div>
	);
};

export default MainSetting;
