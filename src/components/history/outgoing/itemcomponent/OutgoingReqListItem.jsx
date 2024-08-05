import React, { useState, forwardRef } from "react";
import OutgoingReqListModal from "./OutgoingReqListModal";

const OutgoingReqListItem = forwardRef(({ outgoingReqItem }, ref) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="w-full">
			<div ref={ref}>
				<div
					className="relative w-full flex flex-col"
					onClick={handleOpenModal}
				>
					<div className="text-gray-700 text-base mb-1 border-b border-gray-300 pb-1">
						{outgoingReqItem.outgoingDate}
					</div>
					<div className="w-full  bg-white rounded-[20px] h-[98px]  shadow-lg border-solid flex items-center px-4 cursor-pointer">
						<div className="flex-1 flex justify-center items-center">
							<div className="w-[73px] text-center font-normal truncate text-black text-base leading-[normal]">
								{outgoingReqItem.customerName}
							</div>
						</div>
						<div className="flex-1 flex justify-center items-center">
							<div className="w-[73px] text-center font-normal truncate text-black text-base leading-[normal]">
								{outgoingReqItem.title}
							</div>
						</div>
						<div className="flex-1 flex justify-center items-center">
							<div className="w-[70px] text-center font-normal text-black text-base leading-[normal]">
								{outgoingReqItem.status}
							</div>
						</div>
					</div>
				</div>
			</div>
			{isModalOpen && (
				<OutgoingReqListModal
					handleCloseModal={handleCloseModal}
					outgoingId={outgoingReqItem.outgoingId}
					partialOutgoing={outgoingReqItem.partialOutgoing}
				/>
			)}
		</div>
	);
});

export default OutgoingReqListItem;
