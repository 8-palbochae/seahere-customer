import { url } from "../../constants/defaultUrl";
import { axiosInstance } from "../common/axiosInstance";

const getAlarmHistoryListSlice = async ({ page, size = 10 }) => {
	try {
		const res = await axiosInstance.get(`${url}/alarm/histories`, {
			params: { page, size },
		});
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};

const postLogout = () => {
  return axiosInstance.post(`${url}/logout`)
    .then(response => {
      return response; 
    })
    .catch(error => {
      throw new Error('Failed to fetch data');
    });
};


export { getAlarmHistoryListSlice , postLogout};
