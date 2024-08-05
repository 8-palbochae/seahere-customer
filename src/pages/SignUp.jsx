import { Outlet } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="flex flex-col justify-center">
			<Outlet />
		</div>
	);
};

export default SignUp;
