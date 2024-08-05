import axios from "axios";
import { url } from "../../constants/defaultUrl";

const getOutgoingReqListSlice = async ({
	startDate,
	endDate,
	page,
	size = 10,
	search,
}) => {
	try {
		const res = await axios.get(`${url}/outgoings`, {
			params: { startDate, endDate, search, page, size },
		});
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};

const getOutgoingReqDetailList = async (outgoingId) => {
	try {
		const res = await axios.get(`${url}/outgoings/${outgoingId}`);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};

const changeOutgoingReqState = async (outgoingId, state) => {
	const data = {
		state: state,
	};

	try {
		const res = await axios.patch(
			`${url}/outgoings/${outgoingId}`,
			JSON.stringify(data),
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};

const deleteOutgoingReqDetail = async (outgoingDetailId) => {
	try {
		const res = await axios.delete(
			`${url}/outgoings/details/${outgoingDetailId}`
		);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};
const recoveryOutgoingReqDetail = async (outgoingId) => {
	try {
		const res = await axios.put(`${url}/outgoings/${outgoingId}`);
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};

export {
	getOutgoingReqListSlice,
	getOutgoingReqDetailList,
	changeOutgoingReqState,
	deleteOutgoingReqDetail,
	recoveryOutgoingReqDetail,
};
