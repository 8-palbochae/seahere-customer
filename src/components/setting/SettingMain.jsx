import React from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../constants/trade/trade.image';
import rightButton from '../../assets/setting/right-button.svg'
import settingIcon from './../../constants/setting/setting.image';


const SettingMain = () => {
    return (
        <div className='flex flex-col items-center p-4'>
             <div className='w-36 h-36 mt-10 relative'>
                <img className='w-full h-full object-cover rounded-full' src={tradeIcon.brokerLogo} alt="" />
                <img className='absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full p-1' src={settingIcon.cameraBlackIcon} alt="" />
            </div>

            <div className='border border-gray-300 rounded-md w-full mt-10 text-md'>
                <div className='w-full flex items-center justify-between p-3 border-b border-gray-300'>
                    <div className='w-3/5 font-bold text-lg'>이메일</div>
                    <div className='w-3/5 text-right text-gray-500'>eh4536@naver.com</div>
                </div>
                <div className='w-full flex items-center justify-between p-3 border-b border-gray-300'>
                    <div className='w-3/5 font-bold text-lg'>비밀번호</div>
                    <img className='w-4 h-4' src={rightButton} alt="" />
                </div>
                <div className='w-full flex items-center justify-between p-3 border-b border-gray-300'>
                    <div className='w-3/5 font-bold text-lg'>전화번호</div>
                    <div className='w-3/5 text-right text-gray-500'>010-3344-4954</div>
                    <img className='w-4 h-4 ml-3' src={rightButton} alt="" />
                </div>
                <div className='w-full flex items-center justify-between p-3'>
                    <div className='w-3/5 font-bold text-lg'>주소</div>
                    <img className='w-4 h-4' src={rightButton} alt="" />
                </div>
            </div>
            <div className='border border-gray-300 rounded-md w-full mt-6 text-md'>
                <div className='w-full flex items-center justify-between p-3 border-b border-gray-300'>
                    <div className='w-3/5 font-bold text-lg'>출고 내역 조회</div>
                    <img className='w-4 h-4' src={rightButton} alt="" />
                </div>
                <div className='w-full flex items-center justify-between p-3 border-b border-gray-300'>
                    <div className='w-3/5 font-bold text-lg'>팔로우 관리</div>
                    <img className='w-4 h-4' src={rightButton} alt="" />
                </div>
            </div>
            <div className='flex mt-24 text-gray-500 gap-3'>
                <div>로그아웃</div>
                <div>|</div>
                <div>회원탈퇴</div>
            </div>
        </div>
    );
};

SettingMain.propTypes = {};

export default SettingMain;