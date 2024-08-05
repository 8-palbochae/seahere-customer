import { Outlet } from "react-router-dom";

const Setting = () => {
	return (
		<div className="flex flex-col justify-center">
			<Outlet />
		</div>
	);
};

export default Setting;
