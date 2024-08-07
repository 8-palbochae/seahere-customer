import React from "react";
import headerIcon from "../../../constants/header/header.image";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from '../../../stores/authentication';

export const Header = () => {
	const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useAuthenticationStore();
	const navigate = useNavigate();

	const onClick = (page) => {
		navigate(page);
	};

	const logoutHandler = () => {
		setAccessToken(null);
		setRefreshToken(null);
	};

	const showLogoutIcon = accessToken && refreshToken; // 액세스 토큰과 리프레시 토큰이 모두 존재할 때

	return (
		<div>
			<div className="flex justify-between h-16 bg-white border-b border-D9D9D9">
				{/* 로그아웃 아이콘이 있는 경우와 없는 경우 모두를 처리 */}
				<div className="flex justify-center items-center w-16">
					{showLogoutIcon ? (
						<img
							onClick={logoutHandler}
							src={headerIcon.logoutIcon}
							alt="로그아웃 아이콘"
							className="w-6 h-6 cursor-pointer"
						/>
					) : (
						<div className="w-6 h-6" />
					)}
				</div>
				<div className="flex justify-items-center items-center text-center font-bold text-lg">
					헤더입니다
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
