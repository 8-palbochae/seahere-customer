import axios from "axios";
import { url } from "../../constants/defaultUrl";

const postUser = async (userInfo, type) => {
    const body = {
        "email": userInfo.email,
        "password": userInfo.password,
        "username": userInfo.username,
        "address": userInfo.address
    };

    if (type === 'ceo' && userInfo.companyId) {
        body.companyId = userInfo.companyId;
    }
    try {
        const res = await axios.post(`${url}/users/${type}`, body, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });

        if(res.status===201){ 
            return res;
        }
        else{
            throw new Error("사업자 회원 가입에 실패하였습니다");
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 400) {
                const message = data.message || "잘못된 요청입니다. 입력값을 확인해주세요.";
                throw new Error(message);
            } else if (status === 409) {
                const message = data.message || "중복된 이메일입니다. 다른 이메일을 사용해 주세요.";
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

const postSocialUser = async (socialUser) => {
    const body = {
        "userId" : socialUser.userId,
        "username" : socialUser.username,
        "companyId" : socialUser.companyId,
        "address" : socialUser.address,
        "type" : socialUser.type,
    };
    
    try {
        const res = await axios.post(`${url}/users/oauth`, body, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });

        if(res.status===201){
            console.log(res); 
            return res;
        }
        else{
            throw new Error("회원 가입에 실패하였습니다");
        }
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 400) {
                const message = data.message || "잘못된 요청입니다. 입력값을 확인해주세요.";
                throw new Error(message);
            } else if (status === 409) {
                const message = data.message || "중복된 이메일입니다. 다른 이메일을 사용해 주세요.";
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

export { postUser, postSocialUser };
