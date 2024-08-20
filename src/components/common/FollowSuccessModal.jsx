import React from 'react';
import PropTypes from 'prop-types';

const FollowSuccessModal = ({ isOpen, onClose, action }) => {
    if (!isOpen) return null;

    const messages = {
        followSuccess: '팔로우가 성공적으로 완료되었습니다!',
        unfollowSuccess: '언팔로우가 성공적으로 완료되었습니다!',
        followFail: '팔로우에 실패했습니다. 다시 시도해 주세요.',
        unfollowFail: '언팔로우에 실패했습니다. 다시 시도해 주세요.',
    };

    const message = messages[action] || '알 수 없는 오류가 발생했습니다.';

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 z-20 w-[90%] max-w-sm">
                <div className="text-center text-lg font-medium mb-4">
                    {action.includes('Success') ? '팔로우 성공' : '팔로우 실패'}
                </div>
                <p className="text-center mb-4 text-gray-700">
                    {message}
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={onClose}
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

FollowSuccessModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    action: PropTypes.oneOf(["followSuccess", "unfollowSuccess", "followFail", "unfollowFail"]).isRequired,
};

export default FollowSuccessModal;
