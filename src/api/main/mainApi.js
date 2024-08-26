import { url } from '../../constants/defaultUrl';
import { axiosInstance } from '../common/axiosInstance';

export const fetchTodayInfo = async () => {
  try {
    const response = await axiosInstance.get(`${url}/outgoings/customer/today`);
    if (response.status === 200) {

      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const fetchCompanies = async ({ pageParam = 1, size = 10, searchWord = "" }) => {
  try {
      const response = await axiosInstance.get(`${url}/companies/customer/follow`, {
          params: { page: pageParam, size, searchWord },
      });
      return response.data;
  } catch (error) {
      console.error('업체 정보를 불러오는 중 오류가 발생했습니다:', error);
      throw error;
  }
};

export const getRecentlyOutgoing = async () => {
  try {
    const response = await axiosInstance.get(`${url}/outgoings/recent`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching today info:', error);
    return null;
  }
};


export const getMostOutgoingCompany = async () => {
  try {
    const response = await axiosInstance.get(`${url}/companies/customer/best`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected status code:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching today info:', error);
    return null;
  }
};
