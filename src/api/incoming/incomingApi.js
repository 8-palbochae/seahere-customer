import axios from "axios"
import { url } from "../../constants/defaultUrl"

const getProductList = async (value) => {
    try {
        const res = await axios.get(`${url}/product-search-${value}`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'

            }
        })
        return res.data;

    } catch (error) {
        throw new Error("서버 연결 실패")
    }

    
}
const saveIncomingData = async (data) => {
    try {
        const res = await axios.post(`${url}/saveIncomingData`, data,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        });
        if(!res.ok){
            throw new Error('데이터 저장 실패');
        }
        return res.data;
    } catch (error) {
        throw error;
    }
}
export { getProductList, saveIncomingData }