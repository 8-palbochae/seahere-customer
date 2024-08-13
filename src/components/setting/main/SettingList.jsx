import React from "react";
import SettingItem from "./SettingItem";
import settingIcon from "../../../constants/setting/setting.image";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from '../../../stores/authentication';

const SettingList = () => {
	const navigate = useNavigate();
	const { setAccessToken , setRefreshToken} = useAuthenticationStore();

	const onClick = (page) => {
		navigate(page);
	};

	const onClikcLogout = () => {
		setAccessToken(null);
		setRefreshToken(null);
		navigate("/login");
	}

	return (
		<div className="flex flex-col  w-full h-full">
			<div onClick={() => onClick("/setting/alarms")}>
				<SettingItem type={"알람 보내기"} svg={settingIcon.sendIcon} />
			</div>
			<div onClick={() => onClick("/setting/alarm-history")}>
				<SettingItem
					type={"보낸 알람 내역"}
					svg={settingIcon.alarmHistoryIcon}
				/>
			</div>
			<div onClick={() => onClick("/setting/inventories")}>
				<SettingItem
					type={"재고 설정"}
					svg={settingIcon.inventoryIcon}
				/>
			</div>
			<div onClick={() => onClick("/setting/teams")}>
				<SettingItem type={"팀 설정"} svg={settingIcon.teamIcon} />
			</div>
			<div onClick={() => onClick("/setting/qr")}>
				<SettingItem type={"QR 정보"} svg={settingIcon.qrIcon} />
			</div>
			<div onClick={() => onClikcLogout()}>
				<SettingItem type={"로그아웃"} svg={settingIcon.logoutIcon} />
			</div>
		</div>
	);
};

export default SettingList;
