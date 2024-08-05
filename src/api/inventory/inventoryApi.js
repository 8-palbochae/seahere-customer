import axios from "axios";
import { url } from "../../constants/defaultUrl";

const getInventoryList = async (companyId, pageNum, size, searchOption) => {
    try {
        const response = await axios.get(`${url}/inventories?companyId=${companyId}&page=${pageNum}&size=${size}&search=${searchOption}`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        return response.data.content.content;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error("서버 연결 실패");
    }
};

const getInventoryDetails = async (companyId, name, category) => {
    try {
        const target = `${url}/inventories/details?companyId=${companyId}&page=0&size=5&search=&name=${name}&category=${category}`;
        const response = await axios.get(target, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        return response.data.content.content;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error("서버 연결 실패");
    }
};

export { getInventoryList, getInventoryDetails };
