import React from "react";
import headerIcon from "../../../constants/header/header.image";
import { useNavigate } from "react-router-dom";

function formatDate(isoString) {
	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const AlarmInfo = React.forwardRef((props, ref) => {
	const navigate = useNavigate();
	console.log(props.alarm);
	const onClick = () => {
		if (props.alarm.saleCompanyId !== null) {
			navigate(`/trades/broker/${props.alarm.saleCompanyId}`);
		}
	};
	return (
		<div className="flex gap-3 justify-center bg-gray-300 rounded-[20px] w-full p-2">
			{/* 			<div>
				<img src={headerIcon.boxIcon} alt="box-icon" />
			</div> */}
			<div
				className="flex flex-col items-center"
				ref={ref}
				onClick={onClick}
			>
				<div>{props.alarm.title}</div>
				<div>{props.alarm.body}</div>
				<div>{formatDate(props.alarm.createTime)}</div>
			</div>
		</div>
	);
});
AlarmInfo.displayName = "AlarmInfo";
export default AlarmInfo;
