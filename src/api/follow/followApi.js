import { axiosInstance } from '../common/axiosInstance';
import { url } from '../../constants/defaultUrl';

export const followCompany = async (companyId) => {
    try {
        const response = await axiosInstance.post(`${url}/follow/follow-company`, null, {
            params: { companyId }
        });
        return response.data;
    } catch (error) {
        console.error("팔로우 요청 실패:", error);
        throw error;
    }
};

export const unfollowCompany = async (companyId) => {
    try {
        const response = await axiosInstance.delete(`${url}/follow/unfollow-company`, {
            params: { companyId }
        });
        return response.data;
    } catch (error) {
        console.error("언팔로우 요청 실패:", error);
        throw error;
    }
};

