import React from "react";
import { DatePicker } from "antd";
import PeriodSetting from "./PeriodStart"; // antd 스타일 시트 import
import dayjs from "dayjs";
import PeriodStart from "./PeriodStart";
import PeriodEnd from "./PeriodEnd";

const { RangePicker } = DatePicker;

function Period() {
	return (
		<div className="flex gap-3 flex-col items-center space-y-4 w-full p-5">
			<div className="flex w-full justify-center space-x-4">
				<PeriodStart />
				<span>~</span>
				<PeriodEnd />
			</div>
		</div>
	);
}

export default Period;
