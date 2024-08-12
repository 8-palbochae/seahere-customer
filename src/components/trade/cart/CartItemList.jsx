import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import useCartStore from "../../../stores/cart";
import { url } from "../../../constants/defaultUrl";
import { tradeIcon } from "../../../constants/trade/trade.image";
import { axiosInstance } from "../../../api/common/axiosInstance";

const CartItemList = () => {
	const { cartItems, company } = useCartStore((state) => ({
		cartItems: state.cartItems,
		company: state.company,
	}));

	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [companyData, setCompanyData] = useState(null); // State to store the fetched data

	useEffect(() => {
		console.log(`${url}/companies/${company}`);
		if (company) {
			const fetchData = async () => {
				try {
					const response = await axiosInstance.get(
						`${url}/companies/${company}`
					);
					if (response.status === 200) {
						const data = response.data;
						setCompanyData(data); // Store the fetched data in state
						setIsLoaded(true);
					} else {
						throw new Error("Failed to load data");
					}
				} catch (err) {
					setError(err.message);
					setIsLoaded(false);
				}
			};

			fetchData();
		}
	}, [company]);

	const totalShipmentAmount = cartItems.reduce((total, cartItem) => {
		return total + (cartItem.price || 0);
	}, 0);

	const totalQuantity = cartItems.reduce((total, cartItem) => {
		return total + (cartItem.quantity || 0);
	}, 0);

	if (error) {
		return <div className="text-red-500">Error: {error}</div>;
	}

	if (!isLoaded) {
		return <div>Loading...</div>; // Show a loading state while the request is being processed
	}

	return (
		<>
			<div className="flex w-full text-left font-bold text-xl ml-4 mt-4 mb-2 justify-start gap-3 items-center">
				<div className="w-6 h-6">
					<img
						src={tradeIcon.brokerLogo}
						alt=""
						className="w-full h-full object-cover rounded-md"
					/>
				</div>
				<span>{companyData.companyName}</span>
			</div>
			<div className="flex flex-col items-center p-2">
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<div className="text-gray-500">
						장바구니에 항목이 없습니다.
					</div>
				)}
				<div className="font-bold w-full text-left text-lg ml-2 mt-4 mb-2">
					출고 요청을 확인 해주세요
				</div>
				<div className="w-full items-center p-4 border rounded-md shadow-md">
					<div className="flex justify-between border-b my-2 pb-4">
						<div className="font-semibold">총 출고량</div>
						<div>
							<span className="text-blue-600 font-semibold">
								{totalQuantity}
							</span>{" "}
							Kg
						</div>
					</div>
					<div className="flex justify-between my-2 pt-2">
						<div className="font-semibold">총 출고 금액</div>
						<div>
							<span className="text-blue-600 font-semibold">
								{totalShipmentAmount.toLocaleString()}
							</span>{" "}
							원
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

CartItemList.propTypes = {
	// Define prop types if necessary
};

export default CartItemList;
