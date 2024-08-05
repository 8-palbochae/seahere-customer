import React from "react";
import headerIcon from "../../../constants/header/header.image";

const AlarmInfo = () => {
	return (
		<div className="flex gap-3 justify-center bg-gray-300 rounded-[20px] w-full p-2">
			<div>
				<img src={headerIcon.boxIcon} alt="box-icon" />
			</div>
			<div className="flex flex-col items-center">
				<div>{"'넙치 외 3건이 출고완료 되었습니다.'"}</div>
				<div>{"2024-07-11 12:30:21"}</div>
			</div>
		</div>
	);
};

export default AlarmInfo;
