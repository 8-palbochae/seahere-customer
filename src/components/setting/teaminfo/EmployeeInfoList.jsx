import React, { useState } from "react";
import EmployeeInfoItem from "./EmployeeInfoItem";
import Modal from "antd/es/modal/Modal";

const EmployeeList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="flex flex-col gap-3 items-center p-3">
			<Modal
				title="멤버 삭제"
				footer={null}
				open={isModalOpen}
				onCancel={handleCancel}
			>
				<div className="flex flex-col gap-3">
					<hr />
					<button className="text-white bg-blue-600 p-2 rounded-[20px]">
						{"멤버 삭제"}
					</button>
				</div>
			</Modal>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
			<div onClick={showModal}>
				<EmployeeInfoItem />
			</div>
		</div>
	);
};

export default EmployeeList;
