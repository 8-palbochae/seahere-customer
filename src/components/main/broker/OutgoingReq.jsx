import React from "react";
import MainImage from "../../../constants/main/main.image";
import { useNavigate } from "react-router-dom";
const OutgoingReq = () => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate("/main/outgoings");
	};
	return (
		<div
			className="flex  rounded-[10px] shadow-lg w-full p-3 self-center"
			onClick={onClick}
		>
			<div>
				<img src={MainImage.outgoingIcon} />
			</div>
			<div className="flex-grow flex self-center justify-center">
				<div className=" border-r border-gray-300 pr-3">
					나갑니데이~
				</div>
				<div className="pl-3">출고 요청 확인</div>
			</div>
		</div>
	);
};

export default OutgoingReq;
