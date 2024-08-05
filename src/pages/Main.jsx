import { Outlet } from "react-router-dom";
const Main = () => {
	return (
		<div className="flex flex-col justify-center mt-4">
			<Outlet />
		</div>
	);
};

export default Main;
