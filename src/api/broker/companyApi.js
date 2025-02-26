import axios from "axios";
import { url } from "../../constants/defaultUrl";
import { axiosInstance } from "../common/axiosInstance";

const postCompany = async (company) => {
	const body = {
		registrationNumber: company.registrationNumber,
		representativeName: company.representativeName,
		companyName: company.companyName,
		address: company.address,
		profileImage: null,
	};
	try {
		const res = await axios.post(`${url}/companies`, body, {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});

		if (res.status === 200) {
			return res.data;
		} else {
			throw new Error("내부 에러");
		}
	} catch (error) {
		throw new Error("서버 연결 실패");
	}
};

const getCompany = async (companyId) => {
	try {
		const res = await axiosInstance.get(`${url}/companies/${companyId}`);
		return res.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw new Error("서버 연결 실패");
	}
};
export { postCompany, getCompany };
