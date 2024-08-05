import React, { useState } from "react";
import OutgoingReqListModalTitle from "./OutgoingReqListModaltitle";
import OutgoingReqListModalDetail from "./OutgoingReqListModalDetail";
import { getOutgoingReqDetailList } from "../../../../api/outgoing/outgoingApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
	changeOutgoingReqState,
	recoveryOutgoingReqDetail,
} from "../../../../api/outgoing/outgoingApi";
import { Modal } from "antd";

const OutgoingReqListModal = ({
	handleCloseModal,
	outgoingId,
	partialOutgoing,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const queryClient = useQueryClient();
	const changeOutgoingReqStateMutation = useMutation({
		mutationFn: (state) => changeOutgoingReqState(outgoingId, state),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["outgoingReqList"],
			});
		},
	});

	const restoreOutgoingReqDetailStateMutation = useMutation({
		mutationFn: (state) => recoveryOutgoingReqDetail(outgoingId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["outgoingDetailList"],
			});
		},
	});

	let { data, isPending } = useQuery({
		queryKey: ["outgoingDetailList", outgoingId],
		queryFn: () => getOutgoingReqDetailList(outgoingId),
		enable: !!outgoingId,
	});

	const handleRestoreClose = () => {
		restoreOutgoingReqDetailStateMutation.mutate(outgoingId);
		setIsModalOpen(false);
		handleCloseModal();
	};

	const handleClose = () => {
		setIsModalOpen(false);
		handleCloseModal();
	};

	const showErrorModal = () => {
		Modal.error({
			title: "재고 부족",
			content: "재고 부족 상품이 있습니다.",
			centered: true,
		});
	};

	const showInfoModal = (title, content) => {
		Modal.info({
			title: title,
			content: content,
			centered: true,
		});
	};

	if (!isModalOpen) return null;
	if (isPending) {
		data = [];
	}
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-3">
			<div className="bg-white rounded-lg p-6 shadow-lg relative max-w-[600px] w-full">
				<div className="flex justify-center items-center relative">
					<span className="text-lg font-semibold mt-2">
						요청 상세
					</span>
					<button
						onClick={handleRestoreClose}
						className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded mb-4"
					>
						X
					</button>
				</div>
				<div className="mt-8">
					<OutgoingReqListModalTitle />
				</div>
				<div className="mt-2 overflow-auto max-h-[30vh]">
					{data.map((item) => (
						<OutgoingReqListModalDetail
							key={item.outgoingDetailId}
							item={item}
							partialOutgoing={partialOutgoing}
						/>
					))}
				</div>

				<div className="mt-4 flex justify-center gap-4">
					<button
						className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
						onClick={() => {
							const isNotPossible = data.some(
								(item) => item.afterCount < 0
							);
							if (isNotPossible) {
								showErrorModal();
								return;
							}
							changeOutgoingReqStateMutation.mutate("ready");
							showInfoModal(
								"출고 대기",
								"출고 상태가 대기로변경되었습니다."
							);
							handleClose();
						}}
					>
						수락
					</button>
					<button
						className="bg-gray-300 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
						onClick={() => {
							changeOutgoingReqStateMutation.mutate("reject");
							showInfoModal("출고 거절", "출고 거절되었습니다.");
							handleRestoreClose();
						}}
					>
						거절
					</button>
				</div>
			</div>
		</div>
	);
};

export default OutgoingReqListModal;
