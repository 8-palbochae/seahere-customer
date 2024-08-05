import { Drawer, Checkbox } from "antd";
import React, { useState } from "react";
import NoQRSearchInput from "../../common/NoQRSearchInput";
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
	"광어",
	"우럭",
	"멸치",
	"다시마",
	"고등어",
	"갈치",
	"전어",
	"대방어",
	"연어",
];
const InventoryFilterModal = ({ open, setOpen }) => {
	const [checkedList, setCheckedList] = useState([]);
	const checkAll = checkedList.length === plainOptions.length;
	const onClose = () => {
		setOpen(false);
	};
	const onChange = (list) => {
		setCheckedList(list);
	};
	const onCheckAllChange = (e) => {
		setCheckedList(e.target.checked ? plainOptions : []);
	};
	const indeterminate =
		checkedList.length > 0 && checkedList.length < plainOptions.length;
	return (
		<>
			<Drawer
				title="필터"
				placement={"bottom"}
				closable={false}
				onClose={onClose}
				open={open}
				className="rounded-t-[30px]" // Tailwind CSS 클래스 추가
			>
				<div className="flex flex-col h-full w-full gap-1">
					<div className="w-full">
						<NoQRSearchInput />
					</div>
					<div
						className="grid h-3/4 p-1 gap-1"
						style={{ gridTemplateColumns: "1fr 2fr" }}
					>
						<div className="bg-gray-200 overflow-auto border border-gray-400">
							<div className="flex justify-center bg-white border-b-2">
								{"거래품목"}
							</div>
							<hr />
							<div className="flex justify-center">
								{"생선/횟감"}
							</div>
							<div className="flex justify-center">
								{"생선/비횟감"}
							</div>
						</div>
						<div className="bg-white overflow-auto p-1  border border-gray-400">
							<div>
								<Checkbox
									indeterminate={indeterminate}
									onChange={onCheckAllChange}
									checked={checkAll}
								>
									{"전체 선택"}
								</Checkbox>
								<hr />
							</div>

							<div>
								<CheckboxGroup
									className="flex flex-col gap-2"
									options={plainOptions}
									value={checkedList}
									onChange={onChange}
								/>
							</div>
						</div>
					</div>
					<button
						className="flex justify-center bg-blue-600 text-white p-2 w-pull rounded-[20px]"
						onClick={onClose}
					>
						{"추가하기"}
					</button>
				</div>
			</Drawer>
		</>
	);
};

export default InventoryFilterModal;
