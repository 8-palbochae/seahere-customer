import React from "react";

const ListHeader = () => {
	return (
		<div className=" w-full p-3">
			<div className=" h-full flex border-b-2 p-1">
				<div className="flex-1 flex items-center justify-center ">
					{"어종"}
				</div>
				<div className="flex-1 flex items-center justify-center ">
					{"분류"}
				</div>
				<div className="flex-1 flex flex-col items-center justify-center ">
					<div>{"알림설정"}</div>
					<div>{"수량"}</div>
				</div>
				<div className="flex-1 flex flex-col items-center justify-center ">
					<div>{"출고가격"}</div>

					<div>{"(1kg)"}</div>
				</div>
			</div>
		</div>
	);
};

export default ListHeader;
