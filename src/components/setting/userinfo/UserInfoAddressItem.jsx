import React from "react";

const UserInfoAddressItem = ({ type, address, address2, postNumber }) => {
	return (
		<div className="flex flex-col gap-2 bg-white border-b-2 rounded-[20px] p-3">
			<div className="items-start">{type}</div>
			<div className="flex flex-col items-center p-3">
				<div className="justify-self-center">{address}</div>
				<div className="justify-self-center">{address2}</div>
				<div className="justify-self-center">{postNumber}</div>
			</div>
		</div>
	);
};

export default UserInfoAddressItem;
