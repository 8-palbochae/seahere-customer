import React, { useState } from "react";
import CompanyInfo from "./CompanyInfo";
import settingIcon from "../../../constants/setting/setting.image";
import EmployeeList from "./EmployeeInfoList";
import { Input, Modal } from "antd";

const TeamInfo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Modal
				title="멤버 등록"
				footer={null}
				open={isModalOpen}
				onCancel={handleCancel}
			>
				<div className="flex flex-col gap-3">
					<hr />
					<Input className="" placeholder="이메일" />
					<button className="text-white bg-blue-600 p-2 rounded-[20px]">
						{"멤버 등록"}
					</button>
				</div>
			</Modal>
			<div className="flex justify-center p-2">
				<div className="flex flex-col h-full w-full">
					<CompanyInfo />
				</div>
			</div>
			<hr className="bg-black" />
			<div className="flex flex-col">
				<div className="flex justify-between p-2">
					<div>멤버 목록</div>
					<img
						onClick={showModal}
						src={settingIcon.addIcon}
						alt="add-icon"
					/>
				</div>
				<div>
					<EmployeeList />
				</div>
			</div>
		</>
	);
};

export default TeamInfo;
