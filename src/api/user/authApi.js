import axios from "axios";
import { url } from "../../constants/defaultUrl";

const postEmailLogin = async (loginInfo) => {
    const body = {
        "email": loginInfo.email,
        "password" : loginInfo.password,
    }; 
    try {
        const response = await axios.post(`${url}/login`, body, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });

        if(response.status===200){ 
            const access = response.headers['authorization']; // 서버에서 설정한 헤더 이름으로 변경
            const refresh = response.headers['authorization-refresh']; 

            return [access, refresh];
        }
        else{
            
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 400) {
                const message = data.message || "잘못된 요청입니다. 입력값을 확인해주세요.";
                throw new Error(message);
            } else if (status === 401) {
                const message = data.message || "인증 실패";
                throw new Error(message);
            } else {
                const message = data.message || `서버 오류: ${status}`;
                throw new Error(message);
            }
        } else if (error.request) {
            throw new Error("서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.");
        } else {
            throw new Error(`요청 중 오류가 발생했습니다: ${error.message}`);
        }
    }
};


const authenticationGet = async () => {
    try {
        const response = await axios.get(`${url}/authentication/protected`, {
            headers: {
                'Accept': 'application/json' 
            },
            withCredentials: true 
        });
        
        if(response.status===200){ 
            const access = response.headers['authorization']; // 서버에서 설정한 헤더 이름으로 변경
            const refresh = response.headers['authorization-refresh']; 
            return [access, refresh];
        }
        else{
            
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 400) {
                const message = data.message || "잘못된 요청입니다. 입력값을 확인해주세요.";
                throw new Error(message);
            } else if (status === 401) {
                const message = data.message || "인증 실패";
                throw new Error(message);
            } else {
                const message = data.message || `서버 오류: ${status}`;
                throw new Error(message);
            }
        } else if (error.request) {
            throw new Error("서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.");
        } else {
            throw new Error(`요청 중 오류가 발생했습니다: ${error.message}`);
        }
    }
};


export { postEmailLogin , authenticationGet};
