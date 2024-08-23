import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../login_signup/itemcomponent/InputField';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { getUserInfo } from '../../../api/user/userApi';
import { axiosInstance } from '../../../api/common/axiosInstance';
import { useNavigate } from 'react-router-dom';

const EditAddress = () => {
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
    const navigate = useNavigate();
    const [postCode, setPostCode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await getUserInfo('/users/myinfo');
                setPostCode(userData.address.postCode);
                setAddress(userData.address.mainAddress);
                setDetailAddress(userData.address.subAddress);
            } catch (error) {
                setError(error.message || 'Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setPostCode(data.zonecode);
        setAddress(fullAddress);
        setIsPostcodeOpen(false);
    };

    const handleSubmit = async  () => {
         try {
            const response = await axiosInstance.patch('/users', {
                address: {
                    postCode,
                    mainAddress: address,
                    subAddress: detailAddress,
                },
            });

            if (response.status === 200) {
                navigate("/setting");
            } else {
                throw new Error('Unexpected response status');
            }
        } catch (error) {
            setError(error.message || 'Error updating user data');
        } finally {
            setLoading(false);
        }
        
    }

    return (
        <div className='mx-2 mt-5'>
            <div className='font-bold text-xl p-2'>사용자 주소 정보</div>
            <div className="mt-2">
                <InputField
                type="text"
                name="address"
                placeholder="주소"
                value={address}
                onClick={() => setIsPostcodeOpen(true)}
                readOnly
                className="cursor-pointer"
                />
            </div>
            <div className="mt-2">
                <InputField
                type="text"
                name="postCode"
                placeholder="우편번호"
                value={postCode}
                onClick={(e) => setPostCode(e.target.value)}
                readOnly
                className="cursor-pointer"
                />
            </div>
            <div className="mt-2">
                <InputField
                type="text"
                name="detailAddress"
                placeholder="상세 주소"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                />
            </div>
            
            <div className='fixed bottom-20 left-4 w-full text-xl'> 
                <button
                    className={`w-11/12 font-bold h-12 rounded-md bg-blue-600 text-white`}
                    onClick={() => handleSubmit()}
                >
                    주소 등록
                </button>
            </div>

            {isPostcodeOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
                <div className="bg-white p-4 rounded-lg max-w-[500px] w-full">
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                    <button
                    className="mt-2 w-full py-2 bg-red-600 text-white rounded-md"
                    onClick={() => setIsPostcodeOpen(false)}
                    >
                    닫기
                    </button>
                </div>
                </div>
            )}
        </div>

        
    );
};

EditAddress.propTypes = {};

export default EditAddress;