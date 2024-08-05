import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

const PeriodEnd = ({ setEndDate, endDate }) => {
	const handleStartChange = (date) => {
		setEndDate(dayjs(date).format(dateFormat));
	};
	return (
		<Space direction="vertical" size={12}>
			<DatePicker
				format={dateFormat}
				onPanelChange={() => endDate}
				inputReadOnly={true} // 자판 비활성화
				onChange={(date) => handleStartChange(date)}
				placeholder={endDate}
			/>
		</Space>
	);
};

export default PeriodEnd;
