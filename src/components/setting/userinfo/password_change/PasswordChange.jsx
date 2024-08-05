import React from "react";
import { Input } from "antd";
import MainImage from "../../../../constants/main/main.image";
const PasswordChange = () => {
	return (
		<div className=" flex flex-col justify-between items-center w-full gap-5 p-5">
			<img className=" h-1/3" src={MainImage.mainLogo} alt="Main Logo" />

			<Input.Password
				className="p-3 rounded-[20px]"
				placeholder="비밀번호"
			/>
			<Input.Password
				className="p-3 rounded-[20px]"
				placeholder="비밀번호 확인"
			/>
			<button className="p-3 bg-blue-600 w-full rounded-[20px] text-white">
				{"변경하기"}
			</button>
		</div>
	);
};

export default PasswordChange;
