import React from "react";
import { Modal, Input } from "antd";
import productImg from "../../../assets/income/product.svg";
const SaleInventorySettingModal = ({ isModalOpen, setIsModalOpen }) => {
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<Modal
			title="할인_재고 설정"
			footer={null}
			open={isModalOpen}
			onCancel={handleCancel}
		>
			<div className="flex flex-col gap-3">
				<div className="flex justify-around gap-3 p-3">
					<div className="w-1/3 rounded-[20px] self-center">
						<img src={productImg} alt="상품이미지" />
					</div>
					<div className="flex flex-col gap-2">
						<div className="self-center">
							<b>{"광어 / 활어"}</b>
						</div>
						<div className="self-center">
							<b>{"입고처: 스파로스"}</b>
						</div>
						<div className="flex justify-center items-center w-full self-center rounded-[20px] border border-black p-1 text-red-500 ">
							<b>{"+3일"}</b>
						</div>
						<div className="self-center">
							<b>{"현재재고: 40kg"}</b>
						</div>
					</div>
				</div>
				<div className="flex justify-around items-center  border-b-2 p-1">
					<div className="w-2/3">{"현재 출고금액"}</div>
					<div className="w-1/3">
						<Input />
					</div>
				</div>
				<div className="flex justify-around items-center  border-b-2 p-1">
					<div className="w-2/3">{"할인가"}</div>
					<div className="w-1/3">
						<Input />
					</div>
				</div>
				<div className="flex justify-around">
					<button
						onClick={handleCancel}
						className="rounded-[20px] w-2/5 p-3 text-white bg-blue-600"
					>
						{"수정완료"}
					</button>
					<button
						onClick={handleCancel}
						className="rounded-[20px] w-2/5 p-3 text-black border border-blue-600"
					>
						{"취소"}
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SaleInventorySettingModal;
