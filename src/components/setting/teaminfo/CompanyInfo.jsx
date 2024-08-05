import React from "react";
import settingIcon from "../../../constants/setting/setting.image";

const CompanyInfo = () => {
	return (
		<div className="flex flex-col justify-between w-full bg-blue-600 rounded-[20px] p-3 min-h-40 text-white">
			<img
				className="w-[24px]"
				src={settingIcon.cameraIcon}
				alt="camera-icon"
			/>

			<div className="self-end">{"OO 수산"}</div>
			<hr />
			<div className="self-end">{"051-1234-5678"}</div>
		</div>
	);
};

export default CompanyInfo;
