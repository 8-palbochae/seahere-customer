import React, { useState } from "react";
import QrItem from "./QrItem";
import settingIcon from "../../../constants/setting/setting.image";
const QrList = () => {
	const [checkedCount, setCheckedCount] = useState(0);
	const handleCheckedChange = (isChecked) => {
		setCheckedCount((prevCount) =>
			isChecked ? prevCount + 1 : prevCount - 1
		);
	};
	let button;
	if (checkedCount) {
		button = (
			<button className="w-full rounded-[20px] text-white bg-blue-600 p-2">
				{checkedCount} 이메일로 보내기
			</button>
		);
	}
	return (
		<div className="flex flex-col items-center gap-3 w-full  p-2">
			<div className="flex flex-col items-center gap-3 w-full  p-2 overflow-auto max-h-[50vh]">
				{[...Array(12)].map((_, index) => (
					<QrItem
						key={index}
						qrCode={settingIcon.qrCode}
						onCheckedChange={handleCheckedChange}
					/>
				))}
			</div>
			{button}
		</div>
	);
};

export default QrList;
