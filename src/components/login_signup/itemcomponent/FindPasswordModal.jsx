import React, { useState } from 'react';

const FindPasswordModal = () => {
  const [activeTab, setActiveTab] = useState('id'); // 'id'는 ID 찾기, 'password'는 비밀번호 찾기

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-96 mx-auto p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-around mb-5 border-b">
        <span
          className={`cursor-pointer py-2 px-4 ${activeTab === 'id' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
          onClick={() => handleTabClick('id')}
        >
          ID 찾기
        </span>
        <span
          className={`cursor-pointer py-2 px-4 ${activeTab === 'password' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
          onClick={() => handleTabClick('password')}
        >
          비밀번호 찾기
        </span>
      </div>
      <div className="text-center">
        {activeTab === 'id' ? (
          <div className="id-section">
            <p>아이디를 찾기 위해서는 <a href="#" className="text-blue-500">본인 인증</a>이 필요합니다.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">본인 인증</button>
          </div>
        ) : (
          <div className="password-section">
            <input type="text" placeholder="이메일을 입력하세요" className="mb-4 p-2 border rounded w-full" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">임시 비밀번호 발급</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindPasswordModal;
