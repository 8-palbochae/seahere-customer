import React from "react";
import headerIcon from "../../../constants/header/header.image";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from '../../../stores/authentication';
import { useHeaderText } from "../../../stores/headerText";

export const Header = () => {
	const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useAuthenticationStore();
	const navigate = useNavigate();
	const {headerText} = useHeaderText();

	const onClick = (page) => {
		navigate(page);
	};

	const logoutHandler = () => {
		setAccessToken(null);
		setRefreshToken(null);
	};

	const showLogoutIcon = accessToken && refreshToken;

	return (
		<div>
			<div className="flex justify-between h-16 bg-white border-b border-D9D9D9">
				<div className="flex justify-center items-center w-16">
					<img
						onClick={() => onClick(-1)}
						src={headerIcon.backIcon}
						alt="뒤로가기 아이콘"
						className="w-6 h-6 cursor-pointer"
					/>
				</div>
				<div className="flex justify-items-center items-center text-center font-bold text-lg">
					{headerText}
				</div>
				<div className="flex justify-center items-center mr-3">
					<img
						onClick={() => onClick("/alarm-history")}
						src={headerIcon.bellIcon}
						alt="종 모양 아이콘"
						className="w-6 h-6 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};
