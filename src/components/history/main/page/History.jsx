import Period from "../itemcomponent/Period";
import HistoryList from "../itemcomponent/HistoryList";
const History = () => {
	return (
		<div className="flex flex-col gap-3 w-full ">
			<div className=" w-full">
				<Period />
			</div>
			<div className="w-full">
			<HistoryList/>
		</div>
		</div>
	);
};

export default History;
