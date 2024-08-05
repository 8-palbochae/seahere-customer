import React from "react";
import { useNavigate } from "react-router-dom";
import RightArrowIcon from "../../../assets/setting/right-arrow-icon.svg"; // SVG 파일을 img 태그로 사용하기 위해 가져옵니다.

const SettingItem = ({ type, svg, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="flex p-8 justify-between w-full h-3/4 border-2 items-center rounded-lg border-blue-300 active:bg-blue-300">
      <div className="flex gap-2 items-center">
        <img src={svg} alt="아이콘" className="w-6 h-6" /> {/* SVG를 img 태그로 사용 */}
        {type}
      </div>

      <div>
        <img
          src={RightArrowIcon} // SVG 파일을 img 태그로 사용
          alt="Right Arrow"
          onClick={onClick} // 클릭 이벤트 추가
          className="cursor-pointer w-6 h-6" // 클릭 가능하도록 스타일 추가
        />
      </div>
    </div>
  );
};

export default SettingItem;
