import React, { useState } from "react";
import { Checkbox, Modal } from "antd";
import settingIcon from "../../../constants/setting/setting.image";

const QrItem = ({ qrCode, onClick, onCheckedChange }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [checked, setChecked] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const showImage = () => {
		setIsImageOpen(true);
	};
	const handleImageClose = () => {
		setIsImageOpen(false);
	};
	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onClickModalClose = () => {
		setIsModalOpen(false);
	};

	const handleCheckboxChange = (event) => {
		const isChecked = event.target.checked;
		setChecked(isChecked);
		onCheckedChange(isChecked);
	};

	return (
		<>
			<Modal
				title="Qr 이미지 전송"
				open={isModalOpen}
				footer={null}
				maskClosable={true}
				onCancel={handleClose}
			>
				<div className="flex flex-col gap-2">
					<hr />
					<button
						onClick={onClickModalClose}
						className="bg-gray-300 rounded-[20px] p-2"
					>
						{"이메일로 이미지 보내기"}
					</button>
				</div>
			</Modal>
			<Modal
				title={"광어 / 활어 QR"}
				open={isImageOpen}
				footer={null}
				maskClosable={true}
				onCancel={handleImageClose}
			>
				<div className="flex flex-col gap-2">
					<img src={settingIcon.qrCode} alt="qr-code" />
				</div>
			</Modal>
			<div className="flex flex-col w-full bg-white border-b-2 rounded-[20px] p-2 gap-3">
				<div className="flex items-center gap-4">
					<div>
						<Checkbox onChange={handleCheckboxChange} />
					</div>
					<div
						className="bg-white p-2  rounded-[20px] w-2/5 "
						onClick={showImage}
					>
						{"광어 / 활어"}
					</div>
					<div className="flex-grow flex justify-end">
						<img
							src={settingIcon.moreIcon}
							alt="more-icon"
							onClick={showModal}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrItem;
