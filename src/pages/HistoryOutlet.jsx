import { Outlet } from "react-router-dom";

const HistoryOutlet = () => {
	return (
		<div className="flex flex-col justify-center">
			<Outlet />
		</div>
	);
};

export default HistoryOutlet;
