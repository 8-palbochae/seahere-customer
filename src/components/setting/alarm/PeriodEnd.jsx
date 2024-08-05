import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const PeriodEnd = () => {
    const [endDate, setStartDate] = useState(dayjs('2022/12/12',dateFormat))

    const handleStartChange = (date) => {
      setStartDate(date);
      console.log(endDate);
    }
  return (
    <Space direction="vertical" size={12}>
       <DatePicker
        format={dateFormat}
        inputReadOnly={true} // 자판 비활성화
        onChange={(date) => handleStartChange(date)}
      />
      
    </Space>
  );
};

export default PeriodEnd;