import React from "react";

const OutgoingReqListModalTitle = () => {
	return (
		<div className="w-full max-w-[500px] mx-auto">
			<div className="w-full h-[50px] bg-gray-100 flex items-center justify-between px-0 rounded-md">
				<div className="font-normal text-black text-base text-center leading-[normal] whitespace-nowrap w-[100px]">
					어종
				</div>
				<div className="font-normal text-black text-base text-center leading-[normal] whitespace-nowrap w-[100px]">
					출고량
				</div>
				<div className="font-normal text-black text-base text-center leading-[normal] whitespace-nowrap w-[100px]">
					가격
				</div>
				<div className="font-normal text-black text-base text-center leading-[normal] whitespace-nowrap w-[100px]">
					재고
				</div>
			</div>
		</div>
	);
};

export default OutgoingReqListModalTitle;
