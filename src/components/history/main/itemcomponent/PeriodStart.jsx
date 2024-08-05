import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

const PeriodStart = ({ setStartDate, startDate }) => {
	const handleStartChange = (date) => {
		setStartDate(dayjs(date).format(dateFormat));
	};
	return (
		<Space direction="vertical" size={12}>
			<DatePicker
				format={dateFormat}
				onPanelChange={() => startDate}
				inputReadOnly={true} // 자판 비활성화
				onChange={handleStartChange}
				placeholder={startDate}
			/>
		</Space>
	);
};

export default PeriodStart;
