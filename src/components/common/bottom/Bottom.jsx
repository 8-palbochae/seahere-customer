import React from "react";
import bottomIcon from "../../../constants/bottom/bottom.image";
import { useNavigate } from "react-router-dom";

const Bottom = () => {
	const navigate = useNavigate();
	const onClick = (page) => {
		navigate(page);
		if (page === '') {
			window.location.reload();
		}
	};
	return (
		<div className="flex flex-row justify-between w-full bottom-0 border-t  border-gray-300 bg-white">
			<div
				aria-label="홈"
				className="flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2"
				onClick={() => onClick("")}
			>
				<img
					src={bottomIcon.homeIcon}
					alt="홈 아이콘"
					className="w-6 h-6 mb-1"
				/>
				<span className="text-xs font-extralight text-gray-400">
					홈
				</span>
			</div>
			<div
				aria-label="거래 내역"
				className="flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2"
				onClick={() => onClick("outgoings")}
			>
				<img
					src={bottomIcon.historyIcon}
					alt="거래 내역 아이콘"
					className="w-6 h-6 mb-1"
				/>
				<span className="text-xs font-extralight text-gray-400">
					출고 내역
				</span>
			</div>
			<div
				aria-label="장바구니"
				className="flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2"
				onClick={() => onClick("/carts")}
			>
				<img
					src={bottomIcon.cartIcon}
					alt="장바구니 아이콘"
					className="w-6 h-6 mb-1"
				/>
				<span className="text-xs font-extralight text-gray-400">
					장바구니
				</span>
			</div>
			<div
				aria-label="설정"
				className="flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2"
				onClick={() => onClick("setting")}
			>
				<img
					src={bottomIcon.settingIcon}
					alt="설정 아이콘"
					className="mb-1"
				/>
				<span className="text-xs font-extralight text-gray-400">
					사용자 설정
				</span>
			</div>
		</div>
	);
};

export default Bottom;
