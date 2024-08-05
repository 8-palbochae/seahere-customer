import React from "react";
import { Modal, Input } from "antd";
import productImg from "../../../assets/income/product.svg";
const InventorySettingModal = ({ isModalOpen, setIsModalOpen }) => {
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<Modal
			title="재고 설정"
			footer={null}
			open={isModalOpen}
			onCancel={handleCancel}
		>
			<div className="flex flex-col gap-3">
				<div className="flex justify-around gap-3 p-3">
					<div className="w-1/3 rounded-[20px]">
						<img src={productImg} alt="상품이미지" />
					</div>
					<div className="self-center">
						<b>{"광어 / 활어"}</b>
					</div>
				</div>
				<div className="flex justify-around items-center  border-b-2 p-1">
					<div className="w-2/3">{"재고부족 알림 기준"}</div>
					<div className="w-1/3">
						<Input />
					</div>
				</div>
				<div className="flex justify-around items-center  border-b-2 p-1">
					<div className="w-2/3">{"출고금액"}</div>
					<div className="w-1/3">
						<Input />
					</div>
				</div>
				<div className="flex justify-around">
					<button
						onClick={handleCancel}
						className="rounded-[20px] w-2/5 p-3 text-white bg-blue-600"
					>
						확인
					</button>
					<button
						onClick={handleCancel}
						className="rounded-[20px] w-2/5 p-3 text-black border border-blue-600"
					>
						취소
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default InventorySettingModal;
