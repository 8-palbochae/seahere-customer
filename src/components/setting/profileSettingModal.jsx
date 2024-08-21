import React from 'react';
import PropTypes from 'prop-types';
import { axiosInstance } from '../../api/common/axiosInstance';
import { url } from '../../constants/defaultUrl';

const ProfileSettingModal = ({ onClose, onUpdateProfileImage }) => {
    const fileInputRef = React.useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axiosInstance.patch(`${url}/s3/profile/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                onUpdateProfileImage(response.data);
                onClose();
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handleDefaultImageClick = async () => {
        try {
            await axiosInstance.delete(`${url}/s3/profile/delete`);
            onUpdateProfileImage(null);
            onClose();
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 w-64">
                <h2 className="text-lg font-bold mb-4 text-center">프로필 설정</h2>
                <button
                    className="w-full bg-blue-500 text-white rounded-lg p-2 mb-2 text-center"
                    onClick={handleDefaultImageClick}
                >
                    기본 이미지 변경
                </button>
                <button
                    className="w-full bg-blue-500 text-white rounded-lg p-2 mb-2 text-center"
                    onClick={handleFileClick}
                >
                    사진 업로드
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button className="w-full bg-gray-500 text-white rounded-lg p-2 text-center" onClick={onClose}>
                    취소
                </button>
            </div>
        </div>
    );
};

ProfileSettingModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onUpdateProfileImage: PropTypes.func.isRequired,
};

export default ProfileSettingModal;
