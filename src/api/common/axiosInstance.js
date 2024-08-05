import axios from 'axios';
import { useAuthenticationStore } from '../../stores/authentication';
import { url } from './../../constants/defaultUrl';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: url, // 스프링 서버의 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthenticationStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const errorCode = error.response.data.errorCode;

      if (errorCode === 'ACCESS_TOKEN_EXPIRED') {
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          const { refreshToken, setAccessToken, setRefreshToken } = useAuthenticationStore.getState();

          try {
            const response = await axiosInstance.post('/auth/token', null, {
              headers: {
                'Authorization-refresh': `Bearer ${refreshToken}`
              }
            });
            const newAccessToken = response.headers['authorization'];;
            
            console.log("access 재발급" , response);
            setAccessToken(newAccessToken);
            console.log(newAccessToken);
            axiosInstance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

            // 원래 요청의 헤더에 새로운 액세스 토큰 설정
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest); // 원래 요청 다시 시도
          } catch (refreshError) {
            // 리프레시 토큰 요청 실패 시 처리
            // 리프레시 토큰이 만료된 경우 로그인 페이지로 리다이렉트
            const { setAccessToken, setRefreshToken } = useAuthenticationStore.getState();
            setAccessToken(null);
            setRefreshToken(null);

            // React Router의 navigate 훅을 사용하여 로그인 페이지로 이동
            const navigate = useNavigate();
            navigate('/login', { replace: true });

            return Promise.reject(refreshError);
          }
        }
      }

      if (errorCode === 'REFRESH_TOKEN_EXPIRED') {
        // 리프레시 토큰이 만료된 경우 로그인 페이지로 리다이렉트
        const { setAccessToken, setRefreshToken } = useAuthenticationStore.getState();
        setAccessToken(null);
        setRefreshToken(null);

        // React Router의 navigate 훅을 사용하여 로그인 페이지로 이동
        const navigate = useNavigate();
        navigate('/login', { replace: true });
        
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export { useAuthenticationStore, axiosInstance };