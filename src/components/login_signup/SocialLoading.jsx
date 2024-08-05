import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { useAuthenticationStore } from '../../stores/authentication';
import { useNavigate } from 'react-router-dom';
import { authenticationGet } from '../../api/user/authApi';

const SocialLoading = () => {
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useAuthenticationStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      if (accessToken === null && refreshToken === null) {
        try {
          const [access, refresh] = await authenticationGet();
          setAccessToken(access);
          setRefreshToken(refresh);
        } catch (error) {
          console.error("Failed to fetch tokens:", error);
        }
      } else {
        setLoading(false); 
      }
    };

    fetchTokens();
  }, [accessToken, refreshToken, setAccessToken, setRefreshToken]);

  useEffect(() => {
    if (accessToken && refreshToken) {
      navigate("/main");
    } else if (accessToken === null && refreshToken === null) {
      setLoading(true);
    }
  }, [accessToken, refreshToken, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="text-center">
          <h3 className="mb-4 text-lg">로그인 중입니다</h3>
          <SyncLoader color="#000" />
        </div>
      </div>
    );
  }

  return null;
};

export default SocialLoading;
