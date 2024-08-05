// src/components/TradeInventory.js

import React, { useState } from "react";
import CartModal from "../cart/CartModal";
import BrokerInventoryItem from "./BrokerInventoryItem";
import { useNavigate } from "react-router-dom";

const BrokerInventory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleTradeClick = () => {
		navigate("/carts");
	};

	return (
		<>
			<div className="relative min-h-screen pb-16 w-full">
				{/* Main Content Area */}
				<div
					className="w-full cursor-pointer flex flex-col gap-2"
					onClick={handleOpenModal}
				>
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
					<BrokerInventoryItem />
				</div>

				{/* Modal Component */}
				<CartModal isOpen={isModalOpen} onClose={handleCloseModal}>
					<div className="p-4 w-full">
						<BrokerInventoryItem />
					</div>
				</CartModal>
			</div>

			{/* Button Positioned at the Bottom of the Viewport */}
			<div className="fixed bottom-16 left-0 w-full px-4 pb-3 z-50 bg-white outline-none">
				<button
					className="bg-blue-600 w-full text-white h-full p-3 font-bold rounded-md"
					onClick={handleTradeClick}
				>
					{`도움 요청 목록 (0)건`}
				</button>
			</div>
		</>
	);
};

BrokerInventory.propTypes = {};

export default BrokerInventory;
