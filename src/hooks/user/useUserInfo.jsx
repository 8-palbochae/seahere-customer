import { useState, useEffect } from 'react';
import { getUserInfo } from '../../api/user/userApi';

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await getUserInfo();
                setUserInfo(userData);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Error fetching user data');
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return { userInfo, loading, error };
};

export default useUserInfo;
