import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BrokerInfo from "./BrokerInfo";
import BrokerInventory from "../inventory/BrokerInventory";
import { useLocation, useParams } from "react-router-dom";
import { getCompany } from "../../../api/broker/companyApi";

const BrokerDetail = () => {
	const { brokerId } = useParams();
	const location = useLocation();
	const [company, setCompany] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// const company = location.state?.company;
	useEffect(() => {
		const fetchCompany = async () => {
			try {
				if (location.state?.company) {
					setCompany(location.state.company);
				} else {
					const fetchedCompany = await getCompany(brokerId);
					setCompany(fetchedCompany);
				}
			} catch (error) {
				console.error("Failed to fetch company:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCompany();
	}, [brokerId, location.state?.company]);

	const handleItemClick = (item) => {
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedItem(null);
	};
	if (isLoading) {
		return <div>Loading...</div>; // 데이터를 불러오는 동안 표시할 로딩 상태
	}

	return (
		<div className="w-11/12 flex flex-col items-center justify-center ">
			<BrokerInfo company={company} />
			<div className="w-full text-left text-gray-500 mt-2">
				표기된 금액은 kg 당 금액 입니다
			</div>
			<div className="w-full text-left text-gray-500">
				재고량은 출고 시점과 상이할 수 있습니다
			</div>
			{/* <div className='w-full text-xl font-bold my-2'>재고 목록</div> */}
			<BrokerInventory id={brokerId} company={company} />
		</div>
	);
};

BrokerDetail.propTypes = {
	id: PropTypes.string.isRequired,
};

export default BrokerDetail;
