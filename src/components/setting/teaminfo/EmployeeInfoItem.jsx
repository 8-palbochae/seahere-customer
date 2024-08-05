import React from "react";

const EmployeeInfoItem = () => {
	return (
		<div className="flex gap-3 justify-between bg-white border-b-2 w-full rounded-[20px] p-8">
			<div className="flex gap-2">
				<div className="bg-gray-500 w-[24px] h-[24px] rounded-full"></div>
				<div>{"홍길동"}</div>
			</div>
			<div className="flex-grow flex justify-center">
				<div>{"iwantgohome@gmail.com"}</div>
			</div>
		</div>
	);
};

export default EmployeeInfoItem;
