import React, { useState } from "react";
import nupchiIcon from "../../../../assets/history/nupchi-icon.png";
import useDragHandler from "../../../../hooks/useDragHandler";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteOutgoingReqDetail } from "../../../../api/outgoing/outgoingApi";

const OutgoingReqListModalDetail = ({ item, partialOutgoing }) => {
	const queryClient = useQueryClient();
	const deleteOutgoingReqDetailMutation = useMutation({
		mutationFn: (outgoingDetailId) =>
			deleteOutgoingReqDetail(outgoingDetailId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["outgoingDetailList"],
			});
		},
	});

	const [isSwiped, setIsSwiped] = useState(false);

	const handleSwipeLeft = () => {
		setIsSwiped(true);
	};

	const handleSwipeRight = () => {
		setIsSwiped(false);
	};

	const {
		itemRef,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		handleMouseDown,
	} = useDragHandler(handleSwipeLeft, handleSwipeRight);

	const onClickDelete = () => {
		if (partialOutgoing === true) {
			deleteOutgoingReqDetailMutation.mutate(item.outgoingDetailId);
		} else {
			alert("부분발송에 동의하지 않은 주문입니다.");
		}
	};

	return (
		<div className="relative w-full max-w-[600px] rounded-[10px] shadow-lg px-4 py-4 overflow-hidden">
			<div
				ref={itemRef}
				className={`flex items-center justify-start w-full transition-transform duration-300 ease-in-out ${
					isSwiped ? "translate-x-[-100px]" : "translate-x-0"
				}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onMouseDown={handleMouseDown}
			>
				<div className="relative flex items-center mr-2">
					<img
						className="w-[60px] h-[60px] object-cover relative bottom-3"
						alt="Image"
						src={nupchiIcon}
					/>
					<div className="absolute top-[60%] left-0 right-0 text-center truncate text-black font-normal text-base rounded-md px-2 py-1 bg-white bg-opacity-100">
						{item.productName}
					</div>
				</div>

				<div className="text-center flex-1">
					<div className="text-black font-normal text-base truncate">
						{item.outgoingQuantity}
					</div>
				</div>

				<div className="text-center flex-1">
					<div className="text-black font-normal text-base truncate">
						{item.price}원
					</div>
				</div>

				{/* Item 4: 100→20 */}
				<div className="text-center flex-1">
					<div
						className={`text-base font-normal truncate ${
							item.afterCount <= 0 ? "text-red-500" : "text-black"
						}`}
					>
						{item.beforeCount}→{item.afterCount}
					</div>
				</div>
			</div>

			{/* 삭제 버튼 */}
			{isSwiped && (
				<button
					className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white px-4 py-9 rounded-md z-10"
					style={{ width: "100px" }}
					onClick={onClickDelete}
				>
					삭제
				</button>
			)}
		</div>
	);
};

export default OutgoingReqListModalDetail;
