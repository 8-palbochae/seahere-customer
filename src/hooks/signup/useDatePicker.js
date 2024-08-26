import { useState } from 'react';
import dayjs from 'dayjs';

export const useDatePicker = (initialDate = null) => {
  const [date, setDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setDate(date);
  };

  return {
    date,
    handleDateChange,
  };
};
