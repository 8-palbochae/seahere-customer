import React from "react";
import settingIcon from "../../../constants/setting/setting.image";
import { useNavigate } from "react-router-dom";

const UserInfoPasswordItem = ({ type }) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate("/setting/password");
	};
	return (
		<div
			className="flex justify-between gap-2 bg-white border-b-2 rounded-[20px] p-3"
			onClick={() => onClick()}
		>
			<div>{type}</div>
			<img src={settingIcon.rightArrowIcon} alt="오른쪽 화살표" />
		</div>
	);
};

export default UserInfoPasswordItem;
