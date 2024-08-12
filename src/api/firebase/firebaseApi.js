import axios from "axios";
import { url } from "../../constants/defaultUrl";
import { axiosInstance } from "../common/axiosInstance";

const postFirebaseToken = async ({ token }) => {
	const body = {
		token: token,
	};

	console.log("postToken", body);
	try {
		const res = await axiosInstance.post(`${url}/firebase-token`, body, {
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
export { postFirebaseToken };
