import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuthenticationStore } from "../../../stores/authentication";
import { axiosInstance } from "../../../api/common/axiosInstance";

const EditPassword = () => {
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const { setAccessToken, setRefreshToken } = useAuthenticationStore();
	const [loading, setLoading] = useState(true); 
	const [error, setError] = useState(null); 
	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setPassword(inputValue);
	};

	const handleInputCheckChange = (e) => {
		const inputValue = e.target.value;
		setPasswordCheck(inputValue);
	};

	const handleSubmit = async () => {
		try {
			const response = await axiosInstance.patch(`${url}/users`, {
				password: password,
			});

			console.log(response);
			if (response.status === 200) {
				setAccessToken(null);
				setRefreshToken(null);
				navigate("/login");
			} else {
				throw new Error("Unexpected response status");
			}
		} catch (error) {
			setError(error.message || "Error updating user data");
		} finally {
			setLoading(false);
		}
	};

	const isButtonDisabled =
		password.trim() === "" || password !== passwordCheck;

	return (
		<div className="flex flex-col mt-3 p-2 h-full">
			<div className="font-bold text-xl">비밀번호를 입력해주세요</div>
			<div className="mt-3">
				<input
					className="w-full h-12 p-2 bg-gray-100 rounded-md"
					type="password"
					placeholder="신규 비밀번호"
					value={password}
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
			<div className="mt-3">
				<input
					className="w-full h-12 p-2 bg-gray-100 rounded-md"
					type="password"
					placeholder="비밀번호 확인"
					value={passwordCheck}
					onChange={(e) => handleInputCheckChange(e)}
				/>
			</div>
			<div className="fixed bottom-20 left-4 w-full">
				<button
					className={`w-11/12 font-bold h-12 rounded-md ${
						isButtonDisabled
							? "bg-gray-300 text-white cursor-not-allowed"
							: "bg-blue-600 text-white"
					}`}
					disabled={isButtonDisabled}
					onClick={() => handleSubmit()}
				>
					비밀번호 변경
				</button>
			</div>
		</div>
	);
};

EditPassword.propTypes = {};

export default EditPassword;
