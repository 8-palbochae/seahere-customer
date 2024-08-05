import { Link } from "react-router-dom";
import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginsignup/backbutton.svg';

const SignUpChoice = () => {
  return (
    <div className="relative w-[390px] h-[844px] bg-white">
      <div className="absolute w-[390px] h-[423px] top-[436px] left-1">
        <img
          className="w-[390px] h-[390px] top-[33px] left-0 absolute object-cover"
          src={background}
        />
      </div>
      <img
        className="absolute w-80 h-80 top-[52px] left-[35px] object-cover"
        src={MainLogo}
      />
      <Link to="/">
        <img
          className="absolute w-[30px] h-10 top-2 left-2.5 object-cover"
          src={back}
        />
      </Link>
    </div>
  );
};

export default SignUpChoice;
