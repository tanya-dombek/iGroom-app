import React from 'react';
import { parseISO, format, differenceInCalendarDays } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (isoDate) => {
  const date = parseISO(isoDate);
  const now = new Date();

  const daysDiff = differenceInCalendarDays(now, date);

  if (daysDiff === 0) {
    return `Сегодня ${format(date, 'HH:mm')}`;
  } else if (daysDiff === 1) {
    return `Вчера ${format(date, 'HH:mm')}`;
  } else if (daysDiff === 2) {
    return `Позавчера ${format(date, 'HH:mm')}`;
  } else {
    return format(date, 'd MMMM yyyy', { locale: ru });
  }
};

const TimeDisplay = ({ isoDate }) => {
  return <span>{formatDate(isoDate)}</span>;
};

export default TimeDisplay;
