// SignUpOption.jsx
import { Link } from "react-router-dom";
import useUserTypeStore from '../../../stores/signupType';

const ChoiceBox = ({ to, onClick , children }) => {
    const handleClick = (event) => {
        if (onClick) {
          onClick(); // 클릭 핸들러 호출
        }
      };

    return (
        <Link to={to}>
            <div className="flex items-center justify-center w-[316px] h-[160px] bg-[#fffffff2] rounded-[25px] border border-solid border-[#d9d9d9]"
            onClick={handleClick}>
                <div className="[font-family: 'inter-Regular', Helvetica] font-normal text-black text-center tracking-[0] leading-[30px] whitespace-nowrap">
                    {children}
                </div>
            </div>
        </Link>
    );
};

export default ChoiceBox;
